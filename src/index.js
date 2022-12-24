
//// import packages
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import AddInzert from "./pages/AddInzert";
import Sale from "./pages/Sale";
import Buy from "./pages/Buy";
import Others from "./pages/Other";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='price' element={<Price />} />
          <Route path='addInzert' element={<AddInzert />} />
          <Route path='sale' element={<Sale />} />
          <Route path='buy' element={<Buy />} />
          <Route path='others' element={<Others />} />
          <Route path='search' element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
