import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import MakeOrder from './routes/MakeOrder';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MakeOrder" element={<MakeOrder />} />
        </Routes>
      </Router>
  </React.StrictMode>
);
