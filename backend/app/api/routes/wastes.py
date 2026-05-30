from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.schemas.waste import WasteCreate, WasteResponse
from app.models.waste import Waste
import uuid

router = APIRouter(prefix="/wastes", tags=["Wastes"])

@router.post("/", response_model=WasteResponse)
async def create_waste(waste: WasteCreate, db: Session = Depends(get_db)):
    # ID estático para MVP. En producción vendría del token JWT.
    demo_company_id = uuid.uuid4() 
    new_waste = Waste(**waste.model_dump(), company_id=demo_company_id)
    db.add(new_waste)
    db.commit()
    db.refresh(new_waste)
    return new_waste

@router.get("/", response_model=list[WasteResponse])
def get_all_wastes(db: Session = Depends(get_db)):
    return db.query(Waste).filter(Waste.is_active == True).all()