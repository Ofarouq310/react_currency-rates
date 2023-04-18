import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Currencies from './pages/Currencies';
import Details from './pages/Details';
import Footer from './layout/Footer';
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}
