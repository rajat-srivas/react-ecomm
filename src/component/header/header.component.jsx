import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart/cart.component';

const Header = ({ currentUser, hidden }) => (

    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link to='/shop' className='option' >SHOP</Link>
            <Link to='/contact' className='option' >CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                    :
                    <Link className='option' to='/signin' >SIGN IN</Link>
            }

            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>

);

//this method allows us to access the state
//state is the root reducer
//this when wrapped around the export, allows us to access the props without getting passed. We access the prop fromt the state i.e root reducer state
const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    hidden: cart.hidden
})

export default connect(mapStateToProps)(Header);


/*

By importing Logo as react component we can use it as simple html tag as in component
React component that renders an SVG, rather than its filename.
https://create-react-app.dev/docs/adding-images-fonts-and-files/

*/