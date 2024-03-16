import { REMOVE_FROM_CART, UPDATE_QUANTITY } from './actionTypes';

export const removeFromCart = (itemId: number) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const updateQuantity = (itemId: number, quantity: number) => ({
    type: UPDATE_QUANTITY,
    payload: { itemId, quantity },
});
