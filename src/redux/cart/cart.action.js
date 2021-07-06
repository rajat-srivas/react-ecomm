import CartActionTypes from "./cart.actiontypes";

export const toggleCartHiddenAction = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemAction = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const cleartItemFromCartAction = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItemAction = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

//we dont need the payload here as for this we are just toggling the existing value which will already be there