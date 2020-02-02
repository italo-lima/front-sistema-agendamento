import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Form, Input, Check} from "@rocketseat/unform"
import * as Yup from "yup"
import {Content} from "./styles"
import {toast} from "react-toastify"

import api from "../../services/api"

//validação dos dados do form
const schemaCreate = Yup.object().shape({
    first_name: Yup.string()
    .required("Nome Obrigatório"),
    last_name: Yup.string()
    .required("Sobrenome Obrigatório"),
    cpf: Yup.string()
    .required("CPF Obrigatório"),
    email: Yup.string('E-mail Inválido')
    .required('E-mail obrigatório'),
    password: Yup.string().min(6, "Senha").required("Senha Obrigatória"),
    office: Yup.string()
    .required('Cargo Obrigatório'),
    registration: Yup.string()
    .required('Registro Obrigatório')
  })

  const schemaEdit = Yup.object().shape({
    first_name: Yup.string()
    .required("Nome Obrigatório"),
    last_name: Yup.string()
    .required("Sobrenome Obrigatório"),
    cpf: Yup.string()
    .required("CPF Obrigatório"),
    email: Yup.string('E-mail Inválido')
    .required('E-mail obrigatório'),
    office: Yup.string()
    .required('Cargo Obrigatório'),
    registration: Yup.string()
    .required('Registro Obrigatório')
  })

  const useStyles = makeStyles({
      check:{
        display: 'flex', 
        height:'35px', 
        alignItems:'center', 
        padding:"0px 10px"
      }
  })

export default function FormUser({title, user={}, typeAction, nameButton}) {
    const classes = useStyles();

    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState(false)
    
    const initialData = {
        first_name: user.first_name ? user.first_name : '', 
        last_name: user.last_name ? user.last_name : '', 
        cpf: user.cpf ? user.cpf : '', 
        registration:user.registration ? user.registration : '',
        email:user.email ? user.email : '', 
        office:user.office ? user.office : '',
        password: ''
    }
    
    async function handleSubmit(data){
        setLoading(true)
        data.role = check ? 'admin' : 'user'
        const token = localStorage.getItem('@register:token');
        
        if(typeAction == 'create') {
            try{
                await api.post('users', data, {headers: {
                    Authorization: `Bearer ${token}`,
                }})
                setLoading(false)
                toast.success("Usuário cadastrado com sucesso!")
                setTimeout(function(){
                    window.location.reload()
                }, 3000)
            } catch(error){
                const { response } = error;
                const { request, data, ...errorObject } = response;
                setLoading(false)
                toast.error(data.error)
            }
        } else if(typeAction == 'edit'){
            try {
                await api.put(`users/${user.id}`, data, {headers: {
                    Authorization: `Bearer ${token}`,
                }})
                setLoading(false)
                toast.success("Usuário atualizado com sucesso!")
                setTimeout(function(){
                    window.location.reload()
                }, 3000)
            } catch (error){
                const { response } = error;
                const { request, data, ...errorObject } = response;
                setLoading(false)
                toast.error(data.error)
            }
        }
    }

    return(
        <>
            <Grid>
                <Typography style={{padding:'10px'}} variant="h5">{title}</Typography>
            </Grid>
            <Content>
                <Form schema={typeAction =='create' ? schemaCreate : schemaEdit} 
                      onSubmit={handleSubmit} initialData={initialData}>
                    <Input name="first_name" placeholder="Primeiro Nome" />
                    <Input name="last_name" placeholder="Último Nome" />
                    <Input name="cpf" placeholder="CPF" />
                    <Input name="registration" placeholder="Registro" />
                    <Input name="email" type="email" placeholder="E-mail" />
                    {typeAction == 'create' &&
                        <Input name="password" type="password" placeholder="Senha"/>}
                    <Input name="office" placeholder="Cargo" />
                    <div className={classes.check}>
                        <Check name="role" style={{margin:0}} label="Admin" onChange={(e) => setCheck(e.target.checked)}/>
                    </div>
                    
                    <button type="submit">{loading ? 'Carregando...' : `${nameButton}`}</button>
                </Form>
            </Content>
        </>
    )
}