from fastapi import APIRouter

router = APIRouter()

@router.get("/surgeons")
async def list_surgeons():
    return {"message": "List of surgeons"}
