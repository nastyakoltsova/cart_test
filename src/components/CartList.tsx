import React from 'react';
import CartItem from './CartItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const CartList: React.FC = () => {
    const cartItems = useSelector((state: any) => state.cart);

    return (
        <div>
            {cartItems.map((item: any) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;
