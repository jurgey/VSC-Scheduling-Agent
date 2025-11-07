from fastapi import APIRouter

router = APIRouter()

@router.get("/cases")
async def list_cases():
    return {"message": "List of cases"}
