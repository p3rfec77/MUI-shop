import React from 'react'

import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'

const Header = ({ handleCart }) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MUI SHOP
                </Typography>
                <IconButton color='inherit' onClick={handleCart}>
                    <ShoppingBasket />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header