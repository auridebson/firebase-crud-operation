import './App.css';
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import View from './pages/View';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path='/' Component={Home} />
        <Route path='/add' Component={AddEdit} />
        <Route path='/update/:id' Component={AddEdit} />
        <Route path='/view/:id' Component={View} />
        <Route path='/about' Component={About} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
