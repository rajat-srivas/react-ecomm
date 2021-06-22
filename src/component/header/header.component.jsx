import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

const Header = ({ currentUser }) => (

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
        </div>
    </div>

);

export default Header;


/*

By importing Logo as react component we can use it as simple html tag as in component
React component that renders an SVG, rather than its filename.
https://create-react-app.dev/docs/adding-images-fonts-and-files/

*/