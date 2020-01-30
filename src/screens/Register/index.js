import React from 'react';
import {makeStyles} from "@material-ui/core/styles"

import Header from "../../components/Header"
import {Wrapper, Content, CardUser, CardInfo} from "./styles"
import {Grid, Typography} from "@material-ui/core"
import {Form, Input, Select} from "@rocketseat/unform"
import {FaUser, FaPaste} from "react-icons/fa"

const useStyles = makeStyles({
    dateForm:{
        display:'flex',
        flexDirection:'column'
    },
    hourForm:{
        display:'flex',
    },
    equipmentForm:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-around",
    },
    card:{
        backgroundColor:"#fff",
        padding: '15px 15px',
        textAlign:'center'
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
    historic:{
        backgroundColor:"#fff",
        display:"flex",
        flexDirection:'column'
    }
})

export default function Register () {
    const classes = useStyles()
    const schedules = [
        { id: '01', title: 'Data Show Preto' },
        { id: '02', title: 'Data Show Branco' },
        { id: '02', title: 'Data Show Verde' },
    ]
    
   return (
       <>
       <Header />
        <Grid item container xs={12} lg={12} sm={12} justify="center">
            <Grid item container xs={12} lg={10} sm={10} justify="center">
                <Wrapper>
                    <Grid item lg={6} sm={6} xs={9} className={classes.card}>
                        <Typography variant="h5">Faça seu agendamento, rápido e fácil!</Typography>
                        <Content>
                            <Form >
                                <div className={classes.equipmentForm}>
                                    <Typography>Escolha o equipamento</Typography>
                                    <Select name="equipment_id" placeholder="Selecione" 
                                        options={schedules}
                                    /> 
                                </div>
                                <div className={classes.dateForm}>
                                    <Typography>Data da Reserva</Typography>
                                    <Input style={{padding: '10px'}} name="date_initial" type='date' />
                                </div>
                                <div className={classes.hourForm}>
                                    <div>
                                        <Typography>Horário Inicial</Typography>
                                        <Select name="hour_initial" placeholder="Selecione" 
                                            options={schedules} />
                                    </div>
                                    <div>
                                        <Typography>Horário Final</Typography>
                                        <Select name="hour_final" placeholder="Selecione" 
                                            options={schedules} />
                                    </div>
                                </div>
                                
                                <button type="submit">Criar Registro</button>
                            </Form>
                        </Content>
                    </Grid>
                    <Grid container item lg={4} sm={4} xs={3} alignItems="center" className={classes.historic}>
                        <Typography variant="h5" style={{padding: "10px"}}>Breve Histórico Pessoal</Typography>
                        <CardUser>
                            <div>
                                <FaUser size={16}/><Typography>Ítalo Lima</Typography>
                            </div>
                            <div>
                                <FaPaste size={16}/><Typography>43247</Typography>
                            </div>
                        </CardUser>
                        <CardInfo>
                            <Typography>Quantidade de Reservas: 15</Typography>
                            <Typography>Equipamento mais utilizado: Data Show - ERB 124</Typography>
                            <Typography>Registros para o dia atual: 2</Typography>
                        </CardInfo>
                    </Grid>
                     
                   {/* <Grid container item lg={4} sm={4} xs={3} justify="center">
                        <button className={classes.button}>Confirmar retirada</button>
                        <button className={classes.button}>Confirmar entrega</button>
                    </Grid> */}
                    
                </Wrapper>
            </Grid>
        </Grid>
       </>
   )
}
