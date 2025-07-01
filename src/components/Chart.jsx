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
import styled from 'styled-components';

const ChartContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #333;
  margin-top: 100px;
`;

const Chart = () => {
  const expenses = useSelector((state) => state.expenses.list);

  const grouped = expenses.reduce((acc, exp) => {
    const date = exp.date;
    acc[date] = (acc[date] || 0) + Number(exp.amount);
    return acc;
  }, {});

  const data = Object.entries(grouped).map(([date, amount]) => ({
    date,
    amount,
  }));

  data.sort((a, b) => new Date(a.date) - new Date(b.date));

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
