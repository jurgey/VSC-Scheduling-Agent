export async function fetchSurgeons() {
  const res = await fetch('/api/surgeons');
  if (!res.ok) {
    throw new Error('Failed to fetch surgeons');
  }
  return res.json();
}

export async function fetchRecommendations() {
  const res = await fetch('/api/recommendations');
  if (!res.ok) {
    throw new Error('Failed to fetch recommendations');
  }
  return res.json();
}
