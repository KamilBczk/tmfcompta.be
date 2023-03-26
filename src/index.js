import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/reset.css'
import './assets/css/index.css'

import BasicLayout from './components/BasicLayout';

import Home from './views/Home/Home';
import Compta from './views/Compta/Compta';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Error from './views/Error/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='comptabilite-generale' element={<Compta/>}/>
        <Route path='a-propos' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);