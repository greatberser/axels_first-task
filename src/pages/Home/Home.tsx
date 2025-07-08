import { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { FilterPanel, Chart, MonthTotals, TableGrid } from '../../components';
import { GET_EXPENSES } from '../../graphql/queries';

const HomeContainer = styled.div`
  padding: 20px 0;
`;

type FilterState = {
  date: string;
  category: string;
};

export const HomePage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_EXPENSES);
  const all = data?.expenses;
  // const all = useSelector((state: RootState) => state.expenses.list);
  const [filters, setFilters] = useState({ date: '', category: 'All' });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filtered = all
    .filter(
      (exp: { date: string; category: string; amount: number }) =>
        filters.category === 'All' || exp.category === filters.category
    )
    .filter(
      (exp: { date: string; category: string; amount: number }) =>
        filters.date === '' || exp.date === filters.date
    );

  const applyFilters = ({ date, category }: FilterState) => {
    setFilters({ date, category });
  };

  const totalsByMonth = all.reduce(
    (acc: { [key: string]: number }, exp: { date: string; amount: number }) => {
      const month = exp.date.slice(0, 7); // YYYY-MM format
      acc[month] = (acc[month] || 0) + exp.amount;
      return acc;
    },
    {}
  );

  const monthTotalArray = Object.entries(totalsByMonth)
    .map(([key, value]) => [key, value as number] as [string, number])
    .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <HomeContainer>
      <FilterPanel onFilter={applyFilters} />
      <TableGrid expenses={filtered} />
      <MonthTotals totals={monthTotalArray} />
      <Chart />
    </HomeContainer>
  );
};

export default HomePage;
