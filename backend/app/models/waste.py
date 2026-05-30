from sqlalchemy import Column, String, Float, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.database.connection import Base

class Waste(Base):
    __tablename__ = "wastes"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    company_id = Column(UUID(as_uuid=True), ForeignKey("companies.id"))
    title = Column(String(200), nullable=False)
    description = Column(String)
    quantity_kg = Column(Float, nullable=False)
    price_usd = Column(Float, default=0.0)
    image_url = Column(String(500))
    is_active = Column(Boolean, default=True)