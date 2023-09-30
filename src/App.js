// https://www.youtube.com/watch?v=zEdI9L1MZU8

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center">
          <Routes>
            <Route exact path='/home' Component={Home} />
            <Route path='/add' Component={AddEdit} />
            <Route path='/update/:id' Component={AddEdit} />
            <Route path='/view/:id' Component={View} />
            <Route path='/about' Component={About} />
          </Routes>
        </ToastContainer>
      </div>
    </BrowserRouter>

  );
}

export default App;
