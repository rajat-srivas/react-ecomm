import { createSelector } from 'reselect';

//input selector
//used to just get a slice of the entire state
const selectCart = state => state.cart;

//output selector
//created using createSelector
//first param is an array of input selector here only 1
//the second param is a function which is used to perform some operation based
//the param to this function are the return of the input select in arrays cart in this case 
//which is the return of selectCart
//THIS IS CACHED RESPONSE SO WHEN SELECT CART DOESNT CHANGES, SELECTCARTITEMS WONT EXECUTE AND R
//RETURN THE VALUE WHICH WAS THERE LAST TIME PREVENTING UNNESSEARY EXECUTION
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const SelectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItems) => total + cartItems.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItems) => total + cartItems.quantity * cartItems.price, 0)
);