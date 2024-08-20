import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<></>}>
          <Route index element={<></>} />
          <Route path="blogs" element={<></>} />
          <Route path="contact" element={<></>} />
        </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
