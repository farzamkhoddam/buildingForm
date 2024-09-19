import React from 'react';
import './App.css';
import Form from './Form';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', minWidth: '100vw' }} className='App'>
      <Form />
    </Box>
  );
}

export default App;
