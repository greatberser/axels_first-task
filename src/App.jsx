import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './pages/Home';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: '64px', px: 2, minHeight: '100vh', width: '100%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
