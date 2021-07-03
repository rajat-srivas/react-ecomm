import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart.style.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector.js';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} item={item} ></CartItem>)
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});



export default connect(mapStateToProps)(CartDropdown);