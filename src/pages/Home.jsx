import { useState } from 'react';
import { FilterPanel, List, Chart } from '../components';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const HomeContainer = styled.div`
  padding: 20px 0;
`;

export const HomePage = () => {
  const all = useSelector((state) => state.expenses.list);
  const [filters, setFilters] = useState({ date: '', category: 'All' });

  const filtered = all
    .filter(
      (exp) => filters.category === 'All' || exp.category === filters.category
    )
    .filter((exp) => filters.date === '' || exp.date === filters.date);

  const applyFilters = ({ date, category }) => {
    setFilters({ date, category });
    console.log('Filters', date, category);
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
