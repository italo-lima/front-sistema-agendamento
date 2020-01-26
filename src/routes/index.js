import React from "react"
import {Switch} from "react-router-dom"

import Route from "./Route"

import Dashboard from "../screens/Dashboard"
import Register from "../screens/Register"
import SignIn from "../screens/SignIn"
import Home from "../screens/Home"

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={SignIn}/>

            <Route  path='/initial' component={Home} isPrivate/>
            <Route  path='/register' component={Register} isPrivate/>
            <Route  path='/admin' component={Dashboard} isPrivate/>

            <Route path='/' component={() => <h1>404</h1>} />
        </Switch>
    )
}