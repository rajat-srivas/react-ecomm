import React from 'react';
import HomePage from './pages-component/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages-component/shop/shop.component';
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages-component/authentication/signin-signup.component';
import { auth } from './firebase/firebase.util';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }


  unsubscriveFromAuth = null;
  componentDidMount() {
    // this is a subscription, firebase keeps us updated of the status
    this.unsubscriveFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscriveFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
};

export default App;
