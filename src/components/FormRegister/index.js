import React, {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles"

import Header from "../../components/Header"
import {Content} from "./styles"
import {Grid, Typography} from "@material-ui/core"
import {Form, Input, Select} from "@rocketseat/unform"
import * as Yup from "yup"
import api from "../../services/api"
import {toast} from "react-toastify"

const schema = Yup.object().shape({
    equipment_id: Yup.string()
    .required("Escolha o equipamento"),
    DataI: Yup.string()
    .required("Defina a data do registro"),
    hourInitial: Yup.string()
    .required("Defina a hora inicial"),
    hourFinal: Yup.string('Defina a hora final')
    .required('Defina a hora inicial')
  })

const useStyles = makeStyles({
    select:{
        padding: '10px', 
        backgroundColor:'rgba(0,0,0,.1)',
        border: 0,
        borderRadius: "4px",
        height: "44px",
        color: "#000",
        margin: "0 0 10px"
    },
    display:{
        display:'flex',
        justifyContent:"space-around",
    },
    button:{
        height: "44px",
        margin: "5px 10px 0",
        background: "#0095DA",
        fontWeight: "bold",
        color: "#fff",
        borderRadius: "4px",
        fontSize: "18px",
        padding:"10px 15px",
        border: "none",
        transition: "background 0.8s",
        "&:hover": {
            background: '#1c54b2'
        }
    },
})

export default function FormRegister ({user, equipments}) {
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [dataEquipments, setDataEquipments] = useState([])

    useEffect(()=>{
        const dataEquipments = []
        equipments.forEach(({id, name, code}) => {
            dataEquipments.push({id, title: `${name} - ${code}`})
        })
        setDataEquipments(dataEquipments)
    
    }, [])

    async function handleSubmit(data){
        setLoading(true)
        const token = localStorage.getItem('@register:token');

        const dI = data.DataI + " " + data.hourInitial
        const dF = data.DataI + " " + data.hourFinal
        
        const info = {}
        info.date_initial = dI
        info.date_final = dF
        info.equipment_id = data.equipment_id

        try{
            await api.post('register', info, {headers: {
                Authorization: `Bearer ${token}`,
            }})
            setLoading(false)
            toast.success("Registro cadastrado com sucesso!")
            setTimeout(function(){
                window.location.reload()
            }, 3000)
        } catch(error){
            const { response } = error;
            const { request, data, ...errorObject } = response;
            setLoading(false)
            toast.error(data.error)
        }
    }

   return (
       <>
            <Grid>
                <Typography style={{padding:'10px'}} variant="h5">Criar Registro</Typography>
            </Grid>
            <Content>
                {dataEquipments.length > 0 && 
                <Form schema={schema} onSubmit={handleSubmit} >
                    <div>
                        <Typography>Equipamento</Typography>
                        <Select className={classes.select} name="equipment_id" placeholder="Selecione"
                            options={dataEquipments}
                        />
                    </div>
                    <div >
                        <Typography>Data da Reserva</Typography>
                        <Input style={{padding: '10px', width:'100%'}} name="DataI" type='date' />
                    </div>
                    <div className={classes.display}>
                        <div>
                            <Typography>Horário Inicial</Typography>
                            <Input style={{padding: '10px'}} name="hourInitial" type='time' />
                        </div>
                        <div>
                            <Typography>Horário Final</Typography>
                            <Input style={{padding: '10px'}} name="hourFinal" type='time' />
                        </div>
                    </div>
                    
                    <button type="submit">{loading ? 'Carregando...' : 'Criar Registro'}</button>
                </Form>
                }
            </Content>
       </>
   )
}
