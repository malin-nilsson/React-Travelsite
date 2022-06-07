import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styling/main.scss';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Destinations from './components/pages/Destinations';
import PrivateRentals from './components/pages/PrivateRentals';
import Experiences from './components/pages/Experiences';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/rentals" element={<PrivateRentals />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
