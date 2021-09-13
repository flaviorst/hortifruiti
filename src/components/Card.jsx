import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card as Cards, CardMedia, CardActionArea, CardActions, CardContent, Typography, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minWidth: 450,
        maxWidth: 450,
        margin: 30,
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        height: 200,
        flex: 1
    },
})

const Card = props => {

    const { id, imagem, titulo, texto, valor, unidade, botao, setCart, cart } = props

    const classes = useStyles()

    const [quantidade, setQuantidade] = useState(0)

    const handClick = () => {

        console.log(botao)

        if (quantidade !== 0) {
            const fruitItem = localStorage.getItem(id)

            if (fruitItem === null)
                setCart(cart + 1)

            localStorage.setItem(id, JSON.stringify({ id, titulo, texto, valor, quantidade }))

            setQuantidade(0)
        }
    }

    function onChange(event) {
        const { value } = event.target
        setQuantidade(value)
    }

    return (
        <Cards className={classes.root}>
            <CardActionArea>
                <CardMedia
                    style={{ height: 0, paddingTop: '70%' }}
                    image={imagem}
                    title={titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {texto}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="h6" component="p">
                    {unidade}: R${valor}
                </Typography>
                <TextField id="quantidade"
                    label="Quantidade"
                    type="number"
                    size="small"
                    name="quantidade"
                    value={quantidade}
                    onChange={onChange}
                    variant="outlined"
                    style={{ width: '40%' }}
                />
                <Button variant="contained" color="primary" onClick={handClick}>
                    Comprar
                </Button>
            </CardActions>
        </Cards>
    )
}

export default Card