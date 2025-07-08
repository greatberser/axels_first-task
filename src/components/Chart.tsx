import { useQuery } from '@apollo/client';
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { GET_EXPENSES } from '../graphql/queries';
import { ChartContainer } from '../styled/Chart';

type ChartData = {
  date: string;
  amount: number;
};

const Chart: React.FC = () => {
  const { data, loading, error } = useQuery(GET_EXPENSES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const expenses = data?.expenses;

  const grouped = expenses.reduce(
    (acc: { [key: string]: number }, exp: any) => {
      const date = exp.date;
      acc[date] = (acc[date] || 0) + Number(exp.amount);
      return acc;
    },
    {}
  );

  const chartData: ChartData[] = Object.entries(grouped).map(
    ([date, amount]) => ({
      date,
      amount: parseFloat((amount as number).toFixed(2)),
    })
  );

  chartData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <ChartContainer>
      <h2>Chart Component Placeholder</h2>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
