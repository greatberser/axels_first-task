import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components';
import { Home, FormPage } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
