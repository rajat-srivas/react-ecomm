import React from 'react';
import HomePage from './pages-component/homepage/homepage.component';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages-component/shop/shop.component';
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages-component/authentication/signin-signup.component';
import { auth, createUserProfileDocument, getAddressForUser } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUserAction, setUserAddressAction } from './redux/user/user.action';
import Checkout from './component/checkout/checkout.component';
import AddNewAddress from './component/address/address.component';
import CheckoutSummary from './component/checkout-summary/checkout-summary.component';
import Profile from './component/profile/profile.component';
class App extends React.Component {
  unsubscriveFromAuth = null;

  componentDidMount() {
    // this is a subscription, firebase keeps us updated of the status
    const { setCurrentUser, addUserAddress } = this.props;
    this.unsubscriveFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        //userref will only have snapshot of data, not the actual data, for that we will need to use snapshot and data to get that
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(async snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          const addressSnapshot = await getAddressForUser(snapshot.id);
          if (!addressSnapshot.empty) {
            addressSnapshot.forEach(doc => {
              const address = doc.data().address;
              addUserAddress(address);
            });
          }
        });
      }
      else {
        setCurrentUser(user);
      }
    })

  }

  componentWillUnmount() {
    this.unsubscriveFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />

          <Route exact path='/checkout' render={() => this.props.currentUser ? (<Checkout />) : (<SignInAndSignUpPage />)} />

          <Route exact path='/addAddress' component={AddNewAddress} />
          <Route exact path='/checkout-summary' render={() => this.props.currentUser ? (<CheckoutSummary />) : (<SignInAndSignUpPage />)} />
          <Route exact path='/profile' render={() => this.props.currentUser ? (<Profile />) : (<SignInAndSignUpPage />)} />

          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    )
  }
};

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user)),
  addUserAddress: data => dispatch(setUserAddressAction(data))
});

export default connect(mapStateToProps, mapDispathToProps)(App);
//connect has two param, first to get props in this compoenent, second to dispath prop from this component
//here the first param is null, as that is the one used to get the props from reducer
//since this component doesnt need any prop it is null, for example header component needs it so we have passed it the first param
// the second param here is the method to update the state as post login we are updating the state i.e current user object

