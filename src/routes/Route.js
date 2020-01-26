import React from "react"
import {Route, Redirect} from "react-router-dom"

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const signed = true

    if(!signed && isPrivate){
        return <Redirect to='/' />
    }

    if(signed && !isPrivate){
        return <Redirect to='/initial' />
    }

    return <Route {...rest} render={(props) => <Component /> } />
}

//definindo valor padrão
RouteWrapper.defaultProps = {
    isPrivate: false
}