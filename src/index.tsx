import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import OrderRegister from './routes/OrderRegisterSwiper';
import OrdersList from './routes/OrdersList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrderRegister" element={<OrderRegister />} />
          <Route path="/OrdersList" element={<OrdersList />}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
