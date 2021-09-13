import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { Close, PictureAsPdf } from '@material-ui/icons'

import Button from '../components/Button'

import gerarPdf from '../utils/Pdf'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function getCart() {

    let rows = []
    let item = null
    for (let i = 1; i <= 11; i++) {
        item = localStorage.getItem(i)
        if (item !== null) {
            rows.push(JSON.parse(item))
        }
    }

    return rows
}

const TableCart = props => {

    const { cart, setCart } = props

    const classes = useStyles();

    function deleteItem(it) {
        localStorage.removeItem(it)
        setCart(cart - 1)
    }

    let total = 0

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell align="right">Valor</TableCell>
                        <TableCell align="right">Quantidade</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getCart().map((row) => {
                        total = total + (row.valor * row.quantidade)
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.titulo}
                                </TableCell>
                                <TableCell align="right">{row.valor}</TableCell>
                                <TableCell align="right">{row.quantidade}</TableCell>
                                <TableCell align="right">{(row.valor * row.quantidade).toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        color="secondary"
                                        onClick={() => { deleteItem(row.id) }}>
                                        <Close fontSize="small" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                    <TableRow key="total">
                        <TableCell colSpan={3} component="th" align="right" scope="row">Total</TableCell>
                        <TableCell align="right">{total.toFixed(2)}</TableCell>
                        <TableCell align="right">
                            <Button
                                color="primary"
                                onClick={() => { gerarPdf(getCart()) }}>
                                <PictureAsPdf fontSize="small" />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableCart