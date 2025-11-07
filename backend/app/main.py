from fastapi import FastAPI
from .routers.surgeons import router as surgeons_router
from .routers.cases import router as cases_router
from .routers.recommendations import router as recommendations_router

app = FastAPI()

# Include routers
app.include_router(surgeons_router)
app.include_router(cases_router)
app.include_router(recommendations_router)

@app.get("/")
def read_root():
    return {"message": "Hello, world"}
