import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Homepage';
import Profile from './pages/profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
     
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

