import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { cleartItemFromCartAction, addItemAction, removeItemAction } from '../../redux/cart/cart.action';

const CheckoutItem = ({ item, clearItemFromCart, addItemToCart, removeItemFromCart }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemFromCart(item)} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(item)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(item)} >
                &#10005;
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(cleartItemFromCartAction(item)),
    addItemToCart: (item) => dispatch(addItemAction(item)),
    removeItemFromCart: (item) => dispatch(removeItemAction(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);