import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePlayer from './pages';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<CreatePlayer />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
