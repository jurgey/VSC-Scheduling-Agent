import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // In a real app, fetch from your backend API, e.g., http://localhost:8000/surgeons
  const surgeons = [
    { id: 's1', name: 'Dr. Smith', avg_duration: 12 },
    { id: 's2', name: 'Dr. Johnson', avg_duration: 14 },
  ];
  res.status(200).json(surgeons);
}
