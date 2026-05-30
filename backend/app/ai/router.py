import logging
from fastapi import HTTPException

logger = logging.getLogger(__name__)

class AIRouter:
    def __init__(self):
        self.gemini_available = True
        self.groq_available = True
        self.last_engine_used = "none"
        
    async def route_classification(self, waste_data: dict, image_bytes=None):
        self.last_engine_used = "gemini"
        return {"category": "Metal", "risk_level": "Bajo", "co2_potential_savings": 2.5}

    async def route_chat(self, prompt: str, context: dict = None):
        self.last_engine_used = "groq"
        return "Respuesta simulada del asistente industrial de EcoExchange."