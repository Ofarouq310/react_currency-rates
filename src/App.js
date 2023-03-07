import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Details from './pages/Details';
import Currencies from './pages/Currencies';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import { fetchCurrency } from './redux/currency/currency';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies_list" element={<Currencies />} />
          <Route path="/details/:currency" element={<Details />} />
        </Routes>
      </main>
    </>
  );
}
