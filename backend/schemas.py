import datetime
from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field, validator


class AuthenticatedUser(BaseModel):
    id: str
    email: Optional[str] = None
    access_token: str
    raw: Dict[str, Any] = Field(default_factory=dict)


class ChatMessage(BaseModel):
    role: str
    content: str

    @validator("content")
    def content_must_not_be_empty(cls, value: str) -> str:
        if not value or not value.strip():
            raise ValueError("message content cannot be empty")
        return value


class ChatPayload(BaseModel):
    messages: List[ChatMessage] = Field(..., min_items=1)


class ChatResponse(BaseModel):
    content: str


class ExtractedBiomarker(BaseModel):
    name: str
    value: float
    unit: str
    ref_range: str = ""
    test_date: datetime.date = Field(default_factory=datetime.date.today)
    lab_provider: str = "Uploaded Report"

    @validator("name", "unit")
    def required_text_field(cls, value: str) -> str:
        if not value or not value.strip():
            raise ValueError("field cannot be empty")
        return value.strip()

    @validator("ref_range", "lab_provider", pre=True, always=True)
    def optional_text_field(cls, value: Optional[str]) -> str:
        return (value or "").strip()

    @validator("test_date", pre=True, always=True)
    def parse_test_date(cls, value: Any) -> datetime.date:
        if not value:
            return datetime.date.today()
        if isinstance(value, datetime.date):
            return value
        return datetime.date.fromisoformat(str(value)[:10])


class ParseLabReportResponse(BaseModel):
    success: bool
    extracted: int
    saved: int
    data: List[ExtractedBiomarker]


class OptimizerResponse(BaseModel):
    report: str
