import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Footer from './components/footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
