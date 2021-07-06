import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../checkout-item/checkout-item.component';
import CustomButton from '../custom-button/custom-button.component'
import { withRouter } from 'react-router-dom';


const Checkout = ({ cartItems, total, history }) => (
    <div className="checkout-page">
        <div className="checkout-header">

            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
        }
        <div className="total">
            <span>Total: ${total}</span></div>
        <div className="flow">
            <CustomButton inverted onClick={() => {
                history.push('/shop')
            }} >Continue Shopping</CustomButton>

            <CustomButton onClick={() => {
                history.push('/checkout-summary')
            }} >Proceed To Checkout</CustomButton>

        </div>

    </div>
);


//if we use createStructuredSelector of reselect then we dont need to pass the state,
//it is automatically passed on
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(Checkout));