import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePlayer from './pages/CreatePlayer';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ViewPlayers } from './pages/ViewPlayers';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/createPlayer" element={<CreatePlayer />} />
          <Route path="/players" element={<ViewPlayers/>}/>
        </Routes>
    </ChakraProvider>
  );
}

export default App;
