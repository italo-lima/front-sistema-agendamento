import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Form, Input, Check} from "@rocketseat/unform"
import * as Yup from "yup"
import {Content} from "./styles"
import {toast} from "react-toastify"

import api from "../../services/api"

//validação dos dados do form
const schema = Yup.object().shape({
    first_name: Yup.string()
    .required("Nome Obrigatório"),
    last_name: Yup.string()
    .required("Sobrenome Obrigatório"),
    email: Yup.string('E-mail Inválido')
    .required('E-mail obrigatório'),
    password: Yup.string().required("Senha Obrigatória"),
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

export default function TableUser({title, typeRole}) {
    const classes = useStyles();

    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState(false)
    const [user, setUser] = useState({})

    const initialData = {
        first_name: user.first_name ? user.first_name : '', 
        last_name: user.last_name ? user.last_name : '', 
        registration:user.registration ? user.registration : '',
        email:user.email ? user.email : '', 
        office:user.office ? user.office : '',
        role:user.role ? user.role : false,
    }

    async function handleSubmit(data){
        setLoading(true)
        data.role = check ? 'admin' : 'user'

        try{
            await api.post('users', data)
            setLoading(true)
            toast.success("Usuário cadastrado com sucesso!")
        } catch(e){
            setLoading(false)
            toast.error("Erro ao cadastrar usuário")
        }
    }

    const loadUser = async () => {
        const resp = typeRole =='edit' && await api.get('')
    }

    return(
        <>
            <Grid>
                <Typography style={{padding:'10px'}} variant="h5">{title}</Typography>
            </Grid>
            <Content>
                <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
                    <Input name="first_name" placeholder="Primeiro Nome" />
                    <Input name="last_name" placeholder="Último Nome" />
                    <Input name="registration" placeholder="Registro" />
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input name="password" type="password" placeholder="Senha" />
                    <Input name="office" placeholder="Cargo" />
                    <div className={classes.check}>
                        <Check name="role" style={{margin:0}} label="Admin" onChange={(e) => setCheck(e.target.checked)}/>
                    </div>
                    
                    <button type="submit">{loading ? 'Carregando...' : 'Criar'}</button>
                </Form>
            </Content>
        </>
    )
}