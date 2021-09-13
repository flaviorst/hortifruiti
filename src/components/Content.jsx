import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'

import axios from '../utils/Axios'
import Search from './Search'

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //padding: theme.spacing(1),
        minHeight: '7vh',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        //marginTop: theme.spacing(8),
        //padding: theme.spacing(3),
    }, 
    searchField:{
        marginTop: theme.spacing(10)
    }
}))

const Content = props => {

    const { setCart, cart } = props

    const classes = useStyles()

    const [fruits, setFruits] = useState([])
    const [fruitsSearch, setFruitsSearch] = useState('')

    useEffect(() => {
        axios.get('api/hortifruti/fruit', { searchText: fruitsSearch })
            .then(response => setFruits(response.data))

    }, [fruitsSearch])

    return (
        <div>
            <div className={classes.searchField}>
                <Search setFruitsSearch={setFruitsSearch} />
            </div>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    fruits && fruits.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                id={item.id}
                                imagem={item.imagem}
                                titulo={item.titulo}
                                unidade={item.unidade}
                                texto={item.texto}
                                valor={item.valor}
                                botao={item}
                                setCart={setCart}
                                cart={cart}
                            />
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Content