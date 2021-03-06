import React, {useEffect, useState} from "react"
import {Switch} from "react-router-dom"

import api from "../services/api"
import Route from "./Route"
import {isTokenValidation} from "../services/token"

import Dashboard from "../screens/Dashboard"
import Register from "../screens/Register"
import SignIn from "../screens/SignIn"
import Home from "../screens/Home"
import EditProfile from "../screens/EditProfile"
import EditAdminUser from "../screens/EditAdminUser"
import EditAdminEquipment from "../screens/EditAdminEquipment"
import EditAdminRegister from "../screens/EditAdminRegister"

export default function Routes(){
    const [equipments, setEquipments] = useState([])

    const loadEquipments = async () => {
        const token = localStorage.getItem("@register:token")
        const resp = await api.get('equipment', {headers: {
            Authorization: `Bearer ${token}`}})
        setEquipments(resp.data)
    }

    useEffect(()=> {
        isTokenValidation();
        loadEquipments();
    }, [])

    return(
        <Switch>
            <Route exact path='/' component={SignIn}/>

            <Route  path='/initial' component={Home} isPrivate/>
            <Route  path='/edit-profile' component={EditProfile} isPrivate/>
            <Route  path='/register' component={() => <Register equipments={equipments} />} isPrivate/>
            <Route exact path='/admin' component={Dashboard} isPrivate/>
            <Route exact path='/admin/edit/user' component={EditAdminUser} isPrivate/>
            <Route exact path='/admin/edit/equipment' component={EditAdminEquipment} isPrivate/>
            <Route exact path='/admin/edit/register' component={EditAdminRegister} isPrivate/>

            <Route path='/' component={() => <h1>404</h1>} />
        </Switch>
    )
}