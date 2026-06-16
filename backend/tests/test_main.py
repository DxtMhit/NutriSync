import os
import sys
import unittest
from unittest.mock import patch, MagicMock, AsyncMock

# Add backend directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi.testclient import TestClient
from main import app

class TestNutriSyncBackend(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)
        # Mock auth dependency
        self.user_mock = {"id": "test-user-uuid", "email": "test@example.com"}

    def test_read_root(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")

    @patch("main.get_current_user")
    @patch("main.fetch_user_data")
    @patch("google.generativeai.GenerativeModel")
    def test_chat_symptom_analyzer(self, mock_gen_model, mock_fetch_user_data, mock_auth):
        # Setup mocks
        mock_auth.return_value = self.user_mock
        
        # Async helper mock
        async_fetch = AsyncMock()
        async_fetch.return_value = [] # Return empty list for test
        mock_fetch_user_data.side_effect = async_fetch
        
        # Mock Gemini Model
        mock_model_instance = MagicMock()
        mock_chat_instance = MagicMock()
        mock_response = MagicMock()
        mock_response.text = "Based on your symptoms, we suggest checking Vitamin D3 levels."
        mock_chat_instance.send_message.return_value = mock_response
        mock_model_instance.start_chat.return_value = mock_chat_instance
        mock_gen_model.return_value = mock_model_instance

        # Test request
        payload = {
            "messages": [
                {"role": "user", "content": "I feel fatigued and have muscle twitches."}
            ]
        }
        
        # We need to temporarily configure GEMINI_API_KEY for the endpoint check
        with patch("main.GEMINI_API_KEY", "dummy-key"):
            response = self.client.post("/api/chat", json=payload, headers={"Authorization": "Bearer dummy-token"})
            
        self.assertEqual(response.status_code, 200)
        self.assertIn("content", response.json())
        self.assertEqual(response.json()["content"], mock_response.text)

    @patch("main.get_current_user")
    @patch("main.save_biomarker")
    @patch("google.generativeai.GenerativeModel")
    def test_parse_lab_report(self, mock_gen_model, mock_save_biomarker, mock_auth):
        # Setup mocks
        mock_auth.return_value = self.user_mock
        
        async_save = AsyncMock()
        async_save.return_value = True
        mock_save_biomarker.side_effect = async_save
        
        # Mock Gemini Model outputting JSON string
        mock_model_instance = MagicMock()
        mock_response = MagicMock()
        mock_response.text = '[{"name": "Vitamin D3", "value": 24.5, "unit": "ng/mL", "ref_range": "30-100", "test_date": "2026-06-14"}]'
        mock_model_instance.generate_content.return_value = mock_response
        mock_gen_model.return_value = mock_model_instance

        # Mock upload file
        file_content = b"Mock lab report text content"
        files = {"file": ("report.txt", file_content, "text/plain")}

        with patch("main.GEMINI_API_KEY", "dummy-key"):
            response = self.client.post("/api/parse-lab-report", files=files, headers={"Authorization": "Bearer dummy-token"})

        self.assertEqual(response.status_code, 200)
        json_resp = response.json()
        self.assertTrue(json_resp["success"])
        self.assertEqual(json_resp["extracted"], 1)
        self.assertEqual(json_resp["saved"], 1)
        self.assertEqual(json_resp["data"][0]["name"], "Vitamin D3")

    @patch("main.get_current_user")
    @patch("main.fetch_user_data")
    @patch("google.generativeai.GenerativeModel")
    def test_optimize_supplements(self, mock_gen_model, mock_fetch_user_data, mock_auth):
        # Setup mocks
        mock_auth.return_value = self.user_mock
        
        # Setup user context data mocks
        async_fetch = AsyncMock()
        async_fetch.side_effect = [
            [{"name": "Vitamin D3", "value": 15, "unit": "ng/mL", "ref_range": "30-100", "test_date": "2026-06-14"}], # biomarkers
            [{"name": "Fatigue", "intensity": 4, "logged_at": "2026-06-14"}] # symptoms
        ]
        mock_fetch_user_data.side_effect = async_fetch
        
        # Mock Gemini Model
        mock_model_instance = MagicMock()
        mock_response = MagicMock()
        mock_response.text = "<div class='report'><h1>Optimization Report</h1><p>Low Vitamin D3 detected. Co-administer with Magnesium.</p></div>"
        mock_model_instance.generate_content.return_value = mock_response
        mock_gen_model.return_value = mock_model_instance

        with patch("main.GEMINI_API_KEY", "dummy-key"):
            response = self.client.post("/api/optimize-supplements", headers={"Authorization": "Bearer dummy-token"})

        self.assertEqual(response.status_code, 200)
        self.assertIn("report", response.json())
        self.assertEqual(response.json()["report"], mock_response.text)

if __name__ == "__main__":
    unittest.main()
