import React, {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles"

import Header from "../../components/Header"
import {Wrapper, Content, Table} from "./styles"
import {Grid, Typography, Button} from "@material-ui/core"
import {Form, Input, Select} from "@rocketseat/unform"
import {FaUser, FaPaste} from "react-icons/fa"
import * as Yup from "yup"
import api from "../../services/api"
import {toast} from "react-toastify"
import formatDate from "../../services/formatDate"
import {parseISO} from "date-fns"

const useStyles = makeStyles({
    display:{
        display:'flex',
        justifyContent:'space-between'
    },
    hourForm:{
        display:'flex',
        justifyContent: 'space-between',
        maxWidth:'260px',
        width:'100%'
    },
    reservation:{
        padding: '10px', 
        width:'100%',
        margin: 0
    },
    gridForm:{
        paddingTop: '10px', 
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center'
    },
    card:{
        backgroundColor:"#fff",
        padding: '15px',
        textAlign:'center',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center'
    },
    cardTable:{
        backgroundColor:"#fff",
        padding: '15px',
        textAlign:'center',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'flex-start'
    },
    buttonConfirm:{
        backgroundColor:'#76ff03',
        margin: "5px 10px 0",
        fontWeight: "bold",
        color: "#fff",
        borderRadius: "4px",
        border: "none",
        '&:disabled': {
            backgroundColor:'#9e9e9e'
        },
        '&:hover': {
            backgroundColor:'#4caf50',
            color: '#fff'
        }
    },
    buttonReturn:{
        backgroundColor:'#ffcd38',
        margin: "5px 10px 0",
        fontWeight: "bold",
        color: "#fff",
        borderRadius: "4px",
        border: "none",
        '&:disabled': {
            backgroundColor:'#9e9e9e'
        },
        '&:hover': {
            backgroundColor:'#ffc107',
            color: '#fff'
        }
    },
    historic:{
        backgroundColor:"#fff",
        display:"flex",
        flexDirection:'column'
    }
})

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

export default function Register ({equipments}) {
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [dataEquipments, setDataEquipments] = useState([])
    const [registers, setRegisters] = useState([])

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

    const loadRegisters = async () => {
        const token = localStorage.getItem('@register:token');
        const {data} = await api.get('dashboard/register/all', {headers: {
            Authorization: `Bearer ${token}`,
        }})
        
        setRegisters(data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }

    const actionRegister = async (id, action) => {
        const token = localStorage.getItem('@register:token');
        try {
            await api.delete(`/register/${action}/${id}`, {headers: {
                Authorization: `Bearer ${token}`,
            }})
            toast.success(`${action} confirmado`)
            window.location.reload()
        } catch(e){
            toast.error(`${action} falhou`)
        }
    }

    const cancelRegister = async (id) => {
        const token = localStorage.getItem('@register:token');
        try {
            await api.delete(`/register/${id}`, {headers: {
                Authorization: `Bearer ${token}`,
            }})
            toast.success(`Cancelamento confirmado`)
            setTimeout(function(){
                window.location.reload()
            }, 3000)
            
        } catch(e){
            toast.error(`Cancelamento falhou`)
        }
    }

    useEffect(()=>{
        loadRegisters()
        
        const dataEquipments = []
        equipments.forEach(({id, name, code}) => {
            dataEquipments.push({id, title: `${name} - ${code}`})
        })
        setDataEquipments(dataEquipments);
    }, [])
    
   return (
       <>
       <Header />
        <Grid item container xs={12} lg={12} sm={12} justify="center">
            <Wrapper>
                <Grid item lg={3} sm={3} xs={12} className={classes.card}>
                    <Typography variant="h5">Faça seu agendamento!!</Typography>
                    <Typography variant="h6">Rápido e fácil</Typography>
                    <Content>
                        <Form schema={schema} onSubmit={handleSubmit}>
                            <div>
                                <Typography>Equipamento</Typography>
                                <Select name="equipment_id" placeholder="Selecione" 
                                    options={dataEquipments}
                                /> 
                            </div>
                            <div>
                                <Typography>Data da Reserva</Typography>
                                <Input className={classes.reservation} name="DataI" type='date' />
                            </div>
                            <div className={classes.hourForm}>
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
                    </Content>
                </Grid>
                
                <Grid container item lg={9} sm={9} xs={12} justify="center" className={classes.cardTable}>
                    {registers.length == 0 ? <h1>Nenhum registro para esta semana</h1>
                        :
                        <>
                        <h2>Registros</h2>
                        
                        <Table>
                            <thead>
                                <tr>
                                <th>Equipamento</th>
                                <th>Data Inicial</th>
                                <th>Data Final</th>
                                <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registers.map(el => (
                                <tr key={el.id}>
                                    <td>{el.equipment.name} - {el.equipment.code}</td>
                                    <td>{formatDate(el.date_initial)}</td>
                                    <td>{formatDate(el.date_final)}</td>
                                    <td>
                                    <Button variant="contained" className={classes.buttonConfirm} 
                                        onClick={() => actionRegister(el.id, 'checkin')}
                                        disabled={
                                        new Date() > parseISO(el.date_initial) && el.checkin == null ? 
                                        false : true}>
                                        Confirmar
                                    </Button>
                                    <Button variant="contained" className={classes.buttonReturn} 
                                            onClick={() => actionRegister(el.id, 'checkout')}
                                            disabled={el.checkin == null ? true : false}>
                                            Devolver
                                    </Button>
                                    <Button onClick={()=> cancelRegister(el.id)}
                                        variant="contained" style={{margin: "5px 10px 0"}} 
                                        color="secondary">
                                        Cancelar
                                    </Button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                        </>
                    }
                </Grid>
                
            </Wrapper>
        </Grid>
       </>
   )
}
