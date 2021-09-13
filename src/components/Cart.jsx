import React, { useState } from 'react'

import { IconButton, Badge, Tooltip } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import Popup from './Popup'

import CartResume from '../pages/Cart'

const Cart = props => {

    const { cart, setCart } = props

    const [openPopup, setOpenPopup] = useState(false)

    const openCart = () => {
        setOpenPopup(true)
    }

    return (
        <>
            <Tooltip title={`${cart} items no carrinho de compra`}>
                <IconButton color="inherit" onClick={openCart}>
                    <Badge badgeContent={cart} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Popup
                title="Carrinho de Compras"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <CartResume setCart={setCart} cart={cart} />
            </Popup>
        </>
    )
}

export default Cart