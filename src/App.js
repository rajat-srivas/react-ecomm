import React from 'react';
import HomePage from './pages-component/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages-component/shop/shop.component';
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages-component/authentication/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

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
    this.unsubscriveFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        //userref will only have snapshot of data, not the actual data, for that we will need to use snapshot and data to get that
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data);
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state.currentUser)
          );
        });
      }
      else {
        this.setState({ currentUser: null });
      }
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
