import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart.style.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector.js';
import { withRouter } from 'react-router-dom';
import { toggleCartHiddenAction } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item} ></CartItem>)
                    : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHiddenAction());
        }} >Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});


//if we dont supply second param to connect that is mapdispathToProps then
//connect automatically supplies a dispatch prop to the compoent
export default withRouter(connect(mapStateToProps)(CartDropdown));