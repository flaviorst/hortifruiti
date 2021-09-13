import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles, Container, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Button, Paper } from '@material-ui/core'

import axios from '../utils/Axios'
import Copyright from './Copyright'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: theme.palette.common.white
    },
    img: {
        maxHeight: 55,
        marginRight: 100
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        width: theme.spacing(30)
    },
    container: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(3),
        width: theme.spacing(60),
    },
    root: {
        marginTop: theme.spacing(8)
    }
}))

function initialStateUser() {
    return { login: '', pass: '' }
}

function initialStateLogin() {
    return { user: '', message: '' }
}


const Login = props => {

    const classes = useStyles()
    let navigate = useNavigate()

    const [values, setValues] = useState(initialStateUser)
    const [retorno, setRetorno] = useState(initialStateLogin)

    function onChange(event) {
        const { value, name } = event.target

        setRetorno(initialStateLogin)

        setValues({
            ...values,
            [name]: value
        })
    }

    async function onSubmit() {

        try {
            axios.get('api/hortifruti/user', { login: values.login, pass: values.pass })
                .then(response => {
                    if (response.data.length === 0) {
                        localStorage.removeItem('userLogin')
                        setValues(initialStateUser)
                        setRetorno({
                            user: '',
                            message: 'Usuário inválido'
                        })
                    }
                    else {
                        setRetorno(response.data)
                        localStorage.setItem('userLogin', response.data[0].nome)
                        navigate('/home')
                    }
                })
        }
        catch (error) {
            localStorage.removeItem('userLogin')
            setValues(initialStateUser)
            setRetorno({
                user: '',
                message: error.message
            })
        }
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.root} >
            <Paper className={classes.container} elevation={3}>
                <CssBaseline />
                <div className={classes.paper}>
                    <img src="images/logo.png" alt="logo" className={`${classes.img} ${classes.avatar}`} />
                    <Typography component="h1" variant="h6" >
                        Acesse sua conta
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            onChange={onChange}
                            value={values.login}
                            color="secondary"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="pass"
                            label="Senha"
                            type="password"
                            id="pass"
                            onChange={onChange}
                            value={values.pass}
                            color="secondary"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Lembrar neste computador"
                        />
                        <Grid container>
                            <Grid item xs color="error">
                                <Typography color="error" variant="body2">{retorno.message}</Typography>
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            onClick={onSubmit}
                            className={classes.submit}
                        >
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" color="textPrimary">
                                    Esqueceu a senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="" target="_blank" variant="body2" color="textPrimary" >
                                    {"Não tem um login? "}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8} >
                    <Copyright color="textPrimary" />
                </Box>
            </Paper>
        </Container>
    )
}

export default Login