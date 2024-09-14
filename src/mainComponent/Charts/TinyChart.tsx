import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "S",
    progress: 0,
  },
  {
    name: "M",
    progress: 4,
  },
  {
    name: "T",
    progress: 2,
  },
  {
    name: "W",
    progress: 6,
  },
  {
    name: "TH",
    progress: 3,
  },
  {
    name: "F",
    progress: 6,
  },
  {
    name: "S",
    progress: 5,
  },
];

const TinyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis dataKey="progress" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="#222"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyChart;
