from pydantic import BaseModel  
from datetime import datetime  
  
class EventBase(BaseModel):  
    case_id: str  
    event_type: str  
    ts: datetime  
  
class SurgeonRuleBase(BaseModel):  
    surgeon_id: str  
    procedure_code: str  
    p50_duration: float  
    first_case_penalty: float  
    nth_case_speedup: float  
    turnover_baseline: float
