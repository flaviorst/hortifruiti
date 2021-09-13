import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, AppBar, Typography } from '@material-ui/core'

import Menu from './Menu'
import Cart from './Cart'


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    section: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
}));

const Header = props => {

    const { setCart, cart } = props

    const classes = useStyles()

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        HortiFruti
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.section}>
                        <Cart setCart={setCart} cart={cart} />
                        <Menu />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header