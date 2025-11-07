import pandas as pd  
  

def update_surgeon_pacing(events_df: pd.DataFrame, rules_df: pd.DataFrame) -> pd.DataFrame:  
    """Update expected durations dynamically from live event deltas."""  
    merged = events_df.merge(rules_df, on="surgeon_id", how="left")  
    merged["adjusted_duration"] = merged["p50_duration"] * (1 - merged["nth_case_speedup"])  
    return merged
