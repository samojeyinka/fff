import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "17",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "18",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "19",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "20",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "21",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "22",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "23",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "24",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "25",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Barchart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
