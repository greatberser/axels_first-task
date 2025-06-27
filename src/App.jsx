import './App.css';
import FilterPanel from './components/FilterPanel';
import ExpenseList from './components/List';
import Chart from './components/Chart';
import Form from './components/Form';

function App() {
  return (
    <>
      <FilterPanel />
      <ExpenseList />
      <Chart />
      <Form />
    </>
  );
}

export default App;
