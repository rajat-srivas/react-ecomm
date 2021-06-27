export const addItemToCartUtility = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(cart => cart.id === cartItemToAdd.id);

    if (existingCartItems) {
        return cartItems.map(cart =>
            cart.id === cartItemToAdd.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/*
So here we check if the item is already there in the cart
if its there we use map to create a new object, we find the existing item and increase its quantity and keep the other items same
if not there we create a new object, with all the current cartItems and then only add the new cartItemtoAdd along with a new property in it with value as 1
so as all new items will have by default the quantity property that will be updated everytime same thing is added to cart

*/