import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'
import BasketItem from './BasketItem'

const Basket = ({ order = [], removeFromOrder, cartOpen, closeCart }) => {
  return (
    <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Корзина пуста!</ListItem>
        ) : (
          <>
            {order.map(item => (
              <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: '700' }}>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  )
}

export default Basket