import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home/Home.jsx';
import Work from './Pages/Home/Work/Work.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/' element={<Home/>} />
        <Route path='/works' element={<Work/>} />
      </Route>


    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

