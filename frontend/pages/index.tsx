import SurgeonBoard from '../components/SurgeonBoard';

export default function Home() {
  const surgeons = [];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">OR Scheduling Dashboard</h1>
      <SurgeonBoard surgeons={surgeons} />
    </div>
  );
}
