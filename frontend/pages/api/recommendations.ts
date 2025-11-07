import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // In a real app, fetch recommendations from your backend API, e.g., http://localhost:8000/recommendations
  const recommendations = [
    { id: 'r1', recommendation: 'Start Dr. Smith at 7:30' },
    { id: 'r2', recommendation: 'Swap case 2 and 3' },
  ];
  res.status(200).json(recommendations);
}
