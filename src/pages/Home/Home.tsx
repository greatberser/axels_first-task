import { useState } from 'react';
import { FilterPanel, List, Chart } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import type { Expense } from '../../store/ducks/expenses';
import styled from 'styled-components';

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

  return (
    <HomeContainer>
      <FilterPanel onFilter={applyFilters} />
      <List expenses={filtered} />
      <Chart />
    </HomeContainer>
  );
};

export default HomePage;
