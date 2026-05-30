from pydantic import BaseModel
from typing import Optional
from uuid import UUID

class WasteCreate(BaseModel):
    title: str
    description: Optional[str] = None
    quantity_kg: float
    price_usd: float = 0.0

class WasteResponse(WasteCreate):
    id: UUID
    company_id: UUID
    image_url: Optional[str] = None
    is_active: bool

    class Config:
        from_attributes = True