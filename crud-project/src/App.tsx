import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePlayer from './pages';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<CreatePlayer />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
