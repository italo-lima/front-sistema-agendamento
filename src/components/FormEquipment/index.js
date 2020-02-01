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
    name: Yup.string()
    .required("Nome Obrigatório"),
    code: Yup.string()
    .required("Código Obrigatório"),
    owner: Yup.string('Proprietário Obrigatório')
    .required('E-mail obrigatório'),
    color: Yup.string().required("Cor Obrigatório"),
  })

  const useStyles = makeStyles({
      check:{
        display: 'flex', 
        height:'35px', 
        alignItems:'center', 
        padding:"0px 10px"
      }
  })

export default function FormEquipment({title, equipment={}, typeAction,nameButton}) {
    const classes = useStyles();

    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState(false)
    
    const initialData = {
        name: equipment.name ? equipment.name : '', 
        code: equipment.code ? equipment.code : '', 
        owner:equipment.owner ? equipment.owner : '', 
        color:equipment.color ? equipment.color : '',
    }
    
    async function handleSubmit(data){
        setLoading(true)
        data.active = check
        const token = localStorage.getItem('@register:token');

        if(typeAction == 'create') {
            try{
                await api.post('equipment', data, {headers: {
                    Authorization: `Bearer ${token}`,
                }})
                setLoading(false)
                toast.success("Equipamento cadastrado com sucesso!")
                setTimeout(function(){
                    window.location.reload()
                }, 3000)
            } catch(e){
                setLoading(false)
                toast.error("Erro ao cadastrar equipamento")
            }
        } else if(typeAction == 'edit'){
            try {
                await api.put(`equipment/${equipment.id}`, data, {headers: {
                    Authorization: `Bearer ${token}`,
                }})
                setLoading(false)
                toast.success("Equipamento atualizado com sucesso!")
                setTimeout(function(){
                    window.location.reload()
                }, 3000)
            } catch (e){
                setLoading(false)
                toast.error("Erro ao atualizar equipamento")
            }
        }
    }

    return(
        <>
            <Grid>
                <Typography style={{padding:'10px'}} variant="h5">{title}</Typography>
            </Grid>
            <Content>
                <Form schema={schema} 
                      onSubmit={handleSubmit} initialData={initialData}>
                    <Input name="name" placeholder="Nome" />
                    <Input name="code" placeholder="Código" />
                    <Input name="owner" placeholder="Proprietário" />
                    <Input name="color" placeholder="Cor" />
                    <div className={classes.check}>
                        <Check name="active" style={{margin:0}} label="Funcionando?" onChange={(e) => setCheck(e.target.checked)}/>
                    </div>
                    
                    <button type="submit">{loading ? 'Carregando...' : `${nameButton}`}</button>
                </Form>
            </Content>
        </>
    )
}