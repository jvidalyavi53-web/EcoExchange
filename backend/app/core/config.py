from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "EcoExchange AI"
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440
    GEMINI_API_KEY: str
    GROQ_API_KEY: str
    OLLAMA_BASE_URL: str = "http://localhost:11434"

    class Config:
        env_file = ".env"

settings = Settings()