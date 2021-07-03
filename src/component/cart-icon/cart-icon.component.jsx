import React from 'react'
import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartHiddenAction } from '../../redux/cart/cart.action'
import { SelectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, cartItemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

const mapStateToProps = (state) => ({
    cartItemCount: SelectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);