import React from 'react'
import { Navigate } from 'react-router-dom';


type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRoute = (props: PrivateRouterProps) => {

    const isAuth = true;
    if(!isAuth){
        return <Navigate to="/login" />
    }
    return props.children
}

export default PrivateRoute