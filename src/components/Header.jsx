import React from 'react'

import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material'

const Header = ({ handleCart, orderLen }) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MUI SHOP
                </Typography>
                <IconButton color='inherit' onClick={handleCart}>
                    <Badge color='secondary' badgeContent={orderLen}>
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header