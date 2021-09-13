import React from 'react'
import { Button as Buttons, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.dark
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.dark
        }
    }
}))

function Button(props) {

    const { color, children, onClick } = props
    const classes = useStyles()
    return (
        <Buttons
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Buttons>
    )
}

export default Button
