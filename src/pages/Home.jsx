import Chart from '../components/Chart';
import FilterPanel from '../components/FilterPanel';
import List from '../components/List';

export const HomePage = () => {
  return (
    <>
      <FilterPanel />
      <List />
      <Chart />
    </>
  );
};

export default HomePage;
