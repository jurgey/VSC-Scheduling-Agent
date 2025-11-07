import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function RoomTimeline({ data }: { data: any[] }) {
  return (
    <LineChart width={500} height={200} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="predicted" stroke="#2563eb" />
    </LineChart>
  );
}
