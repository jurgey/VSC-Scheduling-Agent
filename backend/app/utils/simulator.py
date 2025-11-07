import numpy as np
import pandas as pd


def simulate_day(cases_df: pd.DataFrame, rules_df: pd.DataFrame, n_runs: int = 5000) -> dict:
    durations = []
    for _, row in cases_df.iterrows():
        rule = rules_df[rules_df['surgeon_id'] == row['surgeon_id']].iloc[0]
        samples = np.random.normal(rule['p50_duration'], rule['p50_duration'] * 0.1, n_runs)
        durations.append(samples)
    total_times = np.sum(durations, axis=0)
    return {
        "expected_finish": float(np.mean(total_times)),
        "p90_finish": float(np.percentile(total_times, 90))
    }
