import React from 'react';
import CartList from './components/CartList';
import TotalAmount from './components/TotalAmount';
import { Grid } from '@mui/material';

const App: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <CartList />
            </Grid>
            <Grid item xs={3}>
                <TotalAmount />
            </Grid>
        </Grid>
    );
};

export default App;
