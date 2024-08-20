import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home'
import { ThemeProvider } from '@emotion/react';
import defaultTheme from './themes/DefaultTheme';
import NavBar from "./components/NavBar"


function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<></>} />
              <Route path="blogs" element={<></>} />
              <Route path="contact" element={<></>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
