import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { FilterPanel, List, Chart, MonthTotals } from '../../components';
import { RootState } from '../../store/store';

const HomeContainer = styled.div`
  padding: 20px 0;
`;

type FilterState = {
  date: string;
  category: string;
};

export const HomePage: React.FC = () => {
  const all = useSelector((state: RootState) => state.expenses.list);
  const [filters, setFilters] = useState({ date: '', category: 'All' });

  const filtered = all
    .filter(
      (exp) => filters.category === 'All' || exp.category === filters.category
    )
    .filter((exp) => filters.date === '' || exp.date === filters.date);

  const applyFilters = ({ date, category }: FilterState) => {
    setFilters({ date, category });
  };

  const totalsByMonth = all.reduce((acc: { [key: string]: number }, exp) => {
    const month = exp.date.slice(0, 7); // YYYY-MM format
    acc[month] = (acc[month] || 0) + exp.amount;
    return acc;
  }, {});

  const monthTotalArray = Object.entries(totalsByMonth).sort(
    ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <HomeContainer>
      <FilterPanel onFilter={applyFilters} />
      <List expenses={filtered} />
      <MonthTotals totals={monthTotalArray} />
      <Chart />
    </HomeContainer>
  );
};

export default HomePage;
