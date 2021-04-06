import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


import logo from '../../assets/commerce.png'
import useStyles from './Styles'

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Reznik's Shop" height="25px" claaName={classes.image} />
                          Reznik's Shop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton area-label="Show cart items color=" inherit>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
