import { useSelector } from 'react-redux';
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { RootState } from '../../store/store';
import { ChartContainer } from '../../styled/Chart';

type ChartData = {
  date: string;
  amount: number;
};

const Chart: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.list);

  const grouped = expenses.reduce((acc: { [key: string]: number }, exp) => {
    const date = exp.date;
    acc[date] = (acc[date] || 0) + Number(exp.amount);
    return acc;
  }, {});

  const data: ChartData[] = Object.entries(grouped).map(([date, amount]) => ({
    date,
    amount,
  }));

  data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <ChartContainer>
      <h2>Chart Component Placeholder</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
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
