import React, {useState, useEffect} from "react"
import {Grid} from "@material-ui/core"
import {BarChart, PieChart, LineChart} from 'react-d3-components'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import {FaUser, FaDesktop, FaUsers, FaPaste, FaClipboardCheck} from "react-icons/fa"
import {Link} from 'react-router-dom'
import api from "../../services/api"

import Header from "../../components/Header"
import {Menu, BoxInfo, Graph} from "./styles"

const useStyles = makeStyles({
    card:{
        top:'0px',
        left: '0',
        height:'100%',
    },
    menuRow:{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        marginLeft: '5px',
        backgroundColor: 'transparent',
        border: 'none'
    },
    title: {
      fontSize: "16px",
      paddingLeft: '15px',
      paddingRight: '10px',
      margin:0
    },
    pos: {
      marginBottom: 12,
    },
    cardInfo: {
        backgroundColor: '#fff',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'120px',
        padding:'10px',
    },
    cardBody: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:"center",
        paddingTop: '10px'
    },
    defaultPad:{
        padding:'10px 20px'
    },
    defaultPad2x:{
        padding:'20px 40px'
    }
  });

export default function Dashboard(){
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [countUsers, setCountUsers] = useState(false)
    const [countEquipments, setCountEquipments] = useState(false)
    
    const loadUsers = async (token) => {
        const users = await api.get('users', {headers: {
            Authorization: `Bearer ${token}`}})
        setCountUsers(users.data.length)
    }

    const loadEquipments = async (token) => {
        const equipments = await api.get('equipment', {headers: {
            Authorization: `Bearer ${token}`}})
        setCountEquipments(equipments.data.length)
    }

    useEffect(() => {
        const token = localStorage.getItem('@register:token');

       loadUsers(token); 
       loadEquipments(token);
    }, [])

    return(
        <>
        <Header />
            <Grid container direction="row" style={{height:'100%', paddingTop:'55px'}}>
                <Grid item xs={12} lg={2} sm={2}>
                    <Card className={classes.card}>
                        <Menu>
                        <Link to='/admin/edit/user'>
                            <button className={classes.menuRow}>
                                <FaUser size={22} />
                                <h1 className={classes.title}>Usuário</h1>
                            </button>
                        </Link>
                        <Link to='/admin/edit/equipment'>
                            <button  className={classes.menuRow}>
                                <FaDesktop size={22} />
                                <h1 className={classes.title}>Equipamentos</h1>
                            </button>
                        </Link>
                        <Link to='/admin/edit/register'>
                            <button  className={classes.menuRow}>
                                <FaClipboardCheck size={22} />
                                <h1 className={classes.title}>Registros</h1>
                            </button>
                        </Link>
                        </Menu>
                    </Card>
                </Grid>
                <Grid item container xs={12} lg={10} sm={10} justify="center" style={{ justifyContent:'center'}}>
                    <Grid item xs={12} lg={12} sm={12}>
                        <BoxInfo>
                            <Grid item xs={12} lg={12} sm={12} className={classes.defaultPad}>
                                <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
                                    <Typography>Total de Usuários Cadastrados</Typography>
                                    <div className={classes.cardBody}>
                                        <FaUsers size={25} style={{marginRight: '15px'}}/>
                                            <Typography variant="h4">{countUsers}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={12} sm={12} className={classes.defaultPad}>
                                <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
                                    <Typography>Total de Equipamentos Cadastrados</Typography>
                                    <div className={classes.cardBody}>
                                    <FaDesktop size={25} style={{marginRight: '15px'}}/>
                                        <Typography variant="h4">{countEquipments}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={12} sm={12} className={classes.defaultPad}>
                                <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
                                    <Typography>Total de Agendamentos - Hoje</Typography>
                                    <div className={classes.cardBody}>
                                        <FaPaste size={25} style={{marginRight: '15px'}}/>
                                        <Typography variant="h4" >12</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </BoxInfo>

                        <Grid container justify="space-between" style={{paddingTop:'30px', flexWrap:'wrap'}}>
                            <Grid item xs={12} lg={6} sm={6} className={classes.defaultPad2x}>
                                <Graph>
                                    <p>Gráfico 1</p>
                                    <select>
                                        <option>Opção 1</option>
                                        <option>Opção 2</option>
                                        <option>Opção 3</option>
                                    </select>
                                </Graph>
                            </Grid> 
                            <Grid item xs={12} lg={6} sm={6} className={classes.defaultPad2x}>
                                <Graph>
                                    <p>Gráfico 2</p>
                                    <select>
                                        <option>Opção 1</option>
                                        <option>Opção 2</option>
                                        <option>Opção 3</option>
                                    </select>
                                </Graph>
                            </Grid>

                            <Grid item xs={12} lg={6} sm={6} className={classes.defaultPad2x}>
                                <Graph>
                                    <p>Gráfico 3</p>
                                    <select>
                                        <option>Opção 1</option>
                                        <option>Opção 2</option>
                                        <option>Opção 3</option>
                                    </select>
                                </Graph>
                            </Grid> 
                            <Grid item xs={12} lg={6} sm={6} className={classes.defaultPad2x}>
                                <Graph>
                                    <p>Gráfico 3</p>
                                    <select>
                                        <option>Opção 1</option>
                                        <option>Opção 2</option>
                                        <option>Opção 3</option>
                                    </select>
                                </Graph>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid>
        </>
    )
}