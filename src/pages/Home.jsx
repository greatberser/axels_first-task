import { FilterPanel, List, Chart } from '../components';
import styled from 'styled-components';
const HomeContainer = styled.div`
  padding: 20px 0;
`;

export const HomePage = () => {
  return (
    <HomeContainer>
      <FilterPanel />
      <List />
      <Chart />
    </HomeContainer>
  );
};

export default HomePage;
