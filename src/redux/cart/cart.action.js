import CartActionTypes from "./cart.actiontypes";

export const toggleCartHiddenAction = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

//we dont need the payload here as for this we are just toggling the existing value which will already be there