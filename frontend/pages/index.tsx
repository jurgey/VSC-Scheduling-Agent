import { useEffect, useState } from 'react';
import SurgeonBoard from '../components/SurgeonBoard';
import { fetchSurgeons } from '../lib/api';

export default function Home() {
  const [surgeons, setSurgeons] = useState([]);
  useEffect(() => {
    fetchSurgeons().then(setSurgeons).catch((err) => {
      console.error(err);
    });
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">OR Scheduling Dashboard</h1>
      <SurgeonBoard surgeons={surgeons} />
    </div>
  );
}
