import React from 'react'
import { Route } from 'react-router-dom'

import Login from '../pages/Login'

function PrivateRoute({ element: Component, ...rest }) {

    const user = localStorage.getItem('userLogin')
    //console.log(user)
    let isAuthenticated = false

    if (user === null)
        isAuthenticated = false
    else
        isAuthenticated = true

    return (
        <Route {...rest} element={(
            isAuthenticated
                ? Component
                : <Login />
        )} />
    )
}

export default PrivateRoute