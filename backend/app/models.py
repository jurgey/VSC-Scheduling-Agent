from sqlalchemy import Column, Integer, String, Float, DateTime  
from sqlalchemy.orm import declarative_base  
  
Base = declarative_base()  
  
class SurgeonRule(Base):  
    __tablename__ = "surgeon_rules"  
    id = Column(Integer, primary_key=True)  
    surgeon_id = Column(String)  
    procedure_code = Column(String)  
    p50_duration = Column(Float)  
    first_case_penalty = Column(Float)  
    nth_case_speedup = Column(Float)  
    turnover_baseline = Column(Float)  
  
class Event(Base):  
    __tablename__ = "events"  
    id = Column(Integer, primary_key=True)  
    case_id = Column(String)  
    event_type = Column(String)  
    ts = Column(DateTime)
