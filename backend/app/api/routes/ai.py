from fastapi import APIRouter
from pydantic import BaseModel
from app.ai.router import AIRouter

router = APIRouter(prefix="/ai", tags=["Artificial Intelligence"])
ai_router = AIRouter()

class ChatRequest(BaseModel):
    prompt: str
    context_waste_id: str = None

@router.post("/chat")
async def chat_with_assistant(request: ChatRequest):
    response = await ai_router.route_chat(request.prompt, {"waste_id": request.context_waste_id})
    return {"reply": response, "engine_used": ai_router.last_engine_used}