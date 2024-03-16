import React, { useState } from 'react';
import { CartItem as CartItemType } from '../types';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/actions/cartActions';
import { IconButton, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';

interface Props {
    item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleIncrement = () => {
        if (quantity < 10) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            dispatch(updateQuantity(item.id, newQuantity));
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(updateQuantity(item.id, newQuantity));
        }
    };

    return (
        <Card>
            <CardMedia component="img" height="800" image={item.thumbnail} alt={item.title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Цена: {item.price} руб.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Кол-во: {quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="decrement" onClick={handleDecrement}>
                    <Remove />
                </IconButton>
                <IconButton aria-label="increment" onClick={handleIncrement}>
                    <Add />
                </IconButton>
                <IconButton aria-label="remove" onClick={handleRemove}>
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CartItem;
