import {
  LineChart,
  Line,
  XAxis,
  //   YAxis,
  //   CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Total_income: 0,
    income: 5,
  },
  {
    name: "Feb",
    Total_income: 2,
    income: 6,
  },
  {
    name: "Mar",
    Total_income: 4,
    income: 5,
  },
  {
    name: "Apr",
    Total_income: 2,
    income: 7,
  },
  {
    name: "May",
    Total_income: 4,
    income: 5,
  },
  {
    name: "Jun",
    Total_income: 3,
    income: 8,
  },
  {
    name: "Jul",
    Total_income: 4,
    income: 6,
  },
];

const Chart2 = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        {/* <YAxis dataKey="progress" /> */}
        <Tooltip />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#7892ae"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Total_income"
          stroke="#cf638c"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart2;
