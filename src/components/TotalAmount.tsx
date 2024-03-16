import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TotalAmount: React.FC = () => {
    const cartItems = useSelector((state: any) => state.cart);

    const totalAmount = cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Итого: {totalAmount} руб.
            </Typography>
        </div>
    );
};

export default TotalAmount;
