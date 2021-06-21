import React from 'react';
import HomePage from './pages-component/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages-component/shop/shop.component';

function App() {
  return (
    // <div>
    //   <HomePage />
    // </div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>

  )
};

export default App;
