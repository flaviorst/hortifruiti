import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Copyright = props => {
    return (
        <Typography variant="body2" color="textPrimary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Flavio Teixeira
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Copyright