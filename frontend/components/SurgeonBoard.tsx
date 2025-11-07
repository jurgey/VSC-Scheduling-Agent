export default function SurgeonBoard({ surgeons }: { surgeons: any[] }) {
  return (
    <div className="grid gap-4">
      {surgeons.map((s, index) => (
        <div key={index} className="p-4 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">{s.name}</h2>
          <p>Avg pace: {s.avg_duration} min</p>
        </div>
      ))}
    </div>
  );
}
