import os
import sys
import unittest
from unittest.mock import AsyncMock, patch


sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi.testclient import TestClient

from auth import get_current_user
from main import app
from schemas import AuthenticatedUser, ExtractedBiomarker
from services.gemini import GeminiServiceError, sanitize_report_html


class TestNutriSyncBackend(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)
        self.user_mock = AuthenticatedUser(
            id="test-user-uuid",
            email="test@example.com",
            access_token="dummy-token",
            raw={"id": "test-user-uuid", "email": "test@example.com"},
        )
        app.dependency_overrides[get_current_user] = lambda: self.user_mock

    def tearDown(self):
        app.dependency_overrides.clear()

    def test_read_root(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")

    def test_protected_endpoint_requires_auth(self):
        app.dependency_overrides.clear()
        response = self.client.post(
            "/api/chat",
            json={"messages": [{"role": "user", "content": "I feel tired."}]},
        )
        self.assertEqual(response.status_code, 401)

    @patch("routes.chat.generate_chat_response")
    @patch("routes.chat.fetch_user_data", new_callable=AsyncMock)
    def test_chat_symptom_analyzer(self, mock_fetch_user_data, mock_generate_chat):
        mock_fetch_user_data.side_effect = [[], []]
        mock_generate_chat.return_value = "Based on your symptoms, consider checking Vitamin D3."

        response = self.client.post(
            "/api/chat",
            json={
                "messages": [
                    {"role": "user", "content": "I feel fatigued and have muscle twitches."}
                ]
            },
            headers={"Authorization": "Bearer dummy-token"},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["content"], mock_generate_chat.return_value)

    @patch("routes.lab_reports.save_biomarker", new_callable=AsyncMock)
    @patch("routes.lab_reports.parse_lab_report")
    def test_parse_lab_report(self, mock_parse_lab_report, mock_save_biomarker):
        mock_parse_lab_report.return_value = [
            ExtractedBiomarker(
                name="Vitamin D3",
                value=24.5,
                unit="ng/mL",
                ref_range="30-100",
                test_date="2026-06-14",
            )
        ]
        mock_save_biomarker.return_value = True

        files = {"file": ("report.txt", b"Mock lab report text content", "text/plain")}
        response = self.client.post(
            "/api/parse-lab-report",
            files=files,
            headers={"Authorization": "Bearer dummy-token"},
        )

        self.assertEqual(response.status_code, 200)
        json_resp = response.json()
        self.assertTrue(json_resp["success"])
        self.assertEqual(json_resp["extracted"], 1)
        self.assertEqual(json_resp["saved"], 1)
        self.assertEqual(json_resp["data"][0]["name"], "Vitamin D3")

    def test_parse_lab_report_rejects_empty_file(self):
        files = {"file": ("empty.txt", b"", "text/plain")}
        response = self.client.post(
            "/api/parse-lab-report",
            files=files,
            headers={"Authorization": "Bearer dummy-token"},
        )

        self.assertEqual(response.status_code, 400)

    @patch("routes.lab_reports.parse_lab_report")
    def test_parse_lab_report_malformed_gemini_json(self, mock_parse_lab_report):
        mock_parse_lab_report.side_effect = GeminiServiceError(
            "Gemini returned malformed JSON for lab report",
            status_code=502,
        )

        files = {"file": ("report.txt", b"Mock lab report text content", "text/plain")}
        response = self.client.post(
            "/api/parse-lab-report",
            files=files,
            headers={"Authorization": "Bearer dummy-token"},
        )

        self.assertEqual(response.status_code, 502)
        self.assertIn("malformed JSON", response.json()["detail"])

    @patch("routes.optimizer.fetch_user_data", new_callable=AsyncMock)
    def test_optimize_supplements_no_data(self, mock_fetch_user_data):
        mock_fetch_user_data.side_effect = [[], []]

        response = self.client.post(
            "/api/optimize-supplements",
            headers={"Authorization": "Bearer dummy-token"},
        )

        self.assertEqual(response.status_code, 200)
        self.assertIn("No health profile data found", response.json()["report"])

    @patch("routes.optimizer.generate_optimizer_report")
    @patch("routes.optimizer.fetch_user_data", new_callable=AsyncMock)
    def test_optimize_supplements(self, mock_fetch_user_data, mock_generate_report):
        mock_fetch_user_data.side_effect = [
            [
                {
                    "name": "Vitamin D3",
                    "value": 15,
                    "unit": "ng/mL",
                    "ref_range": "30-100",
                    "test_date": "2026-06-14",
                }
            ],
            [{"name": "Fatigue", "intensity": 4, "logged_at": "2026-06-14"}],
        ]
        mock_generate_report.return_value = (
            "<div class='report'><h1>Optimization Report</h1>"
            "<p>Low Vitamin D3 detected. Co-administer with Magnesium.</p></div>"
        )

        response = self.client.post(
            "/api/optimize-supplements",
            headers={"Authorization": "Bearer dummy-token"},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["report"], mock_generate_report.return_value)

    def test_sanitize_report_html_removes_obvious_script_vectors(self):
        dirty = '<div onclick="alert(1)"><script>alert(1)</script><a href="javascript:alert(1)">x</a></div>'
        clean = sanitize_report_html(dirty)

        self.assertNotIn("<script", clean.lower())
        self.assertNotIn("onclick", clean.lower())
        self.assertNotIn("javascript:", clean.lower())


if __name__ == "__main__":
    unittest.main()
