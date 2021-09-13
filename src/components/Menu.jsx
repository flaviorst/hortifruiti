import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu as Menus, MenuItem, Tooltip, makeStyles, Avatar } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    avatar: {
        color: '#fff',
        backgroundColor: blue[500]
    }
}))

const Menu = props => {

    const classes = useStyles()
    const ref = useRef()
    let navigate = useNavigate()

    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handClose = () => {
        setOpen(false)
    }

    const handleLogout = () => {
        localStorage.removeItem('userLogin')
        for (let i = 1; i <= 11; i++) {
            localStorage.removeItem(i)
        }
        navigate('/')
        handClose()
    }


    return (
        <>
            <Tooltip title={`Perfil do Usuário`}>
                <Avatar alt="Usuário" ref={ref} onClick={handleOpen} className={classes.avatar} />
            </Tooltip>
            <Menus
                anchorEl={ref.current}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={isOpen}
                onClose={handClose}
            >
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menus>
        </>
    )
}

export default Menu