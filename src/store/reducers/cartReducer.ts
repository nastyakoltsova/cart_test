import { REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actions/actionTypes';
import { CartItem } from '../../types';
import cartData from "../../cart.json";

const initialState: CartItem[] = cartData.products;

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload);
        case UPDATE_QUANTITY:
            return state.map((item) =>
                item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
            );
        default:
            return state;
    }
};

export default cartReducer;
