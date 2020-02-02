import React, {useState, useEffect} from "react"
import {Grid} from "@material-ui/core"
import {BarChart, PieChart, LineChart} from 'react-d3-components'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import {FaUser, FaDesktop, FaUsers, FaPaste, FaClipboardCheck} from "react-icons/fa"
import {Link} from 'react-router-dom'
import api from "../../services/api"

import Header from "../../components/Header"
import {Menu, BoxInfo, Graph, NoneDesktop, NoneMobile} from "./styles"

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
    const [infoInitial, setInfoInitial] = useState(false)
    const [graphAllRegisters, setGraphAllRegisters] = useState([])
    const [graphAllRegistersUsers, setGraphAllRegistersUsers] = useState([])
    
    const loadInfoInitial = async (token) => {
        const {data} = await api.get('dashboard/information-initial', {headers: {
            Authorization: `Bearer ${token}`}})
        setInfoInitial(data)
    }

    const loadGraphicAllRegisters = async (token) => {
        const {data} = await api.get('dashboard/all-registers', {headers: {
            Authorization: `Bearer ${token}`}})
        setGraphAllRegisters(data)
    }

    const loadGraphicAllRegistersUsers = async (token) => {
        const {data} = await api.get('dashboard/all-registers-users', {headers: {
            Authorization: `Bearer ${token}`}})
        setGraphAllRegistersUsers([data])
    }

    useEffect(() => {
        const token = localStorage.getItem('@register:token');

        loadGraphicAllRegistersUsers(token)
        loadGraphicAllRegisters(token)
        loadInfoInitial(token); 
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
                                            <Typography variant="h4">{infoInitial.countUser}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={12} sm={12} className={classes.defaultPad}>
                                <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
                                    <Typography>Total de Equipamentos Cadastrados</Typography>
                                    <div className={classes.cardBody}>
                                    <FaDesktop size={25} style={{marginRight: '15px'}}/>
                                        <Typography variant="h4">{infoInitial.countEquipments}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={12} sm={12} className={classes.defaultPad}>
                                <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
                                    <Typography>Total de Agendamentos - Hoje</Typography>
                                    <div className={classes.cardBody}>
                                        <FaPaste size={25} style={{marginRight: '15px'}}/>
                                        <Typography variant="h4" >{infoInitial.countRegisters}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </BoxInfo>

                        <Grid container justify="space-between" style={{paddingTop:'30px', flexWrap:'wrap'}}>
                            <Grid item xs={12} lg={6} sm={6} className={classes.defaultPad2x}>
                                <Graph>
                                    <p style={{textAlign:'center'}}>
                                        Número de Registros por Equipamento
                                    </p>
                                    {graphAllRegisters.length >0 && 
                                    <>
                                        <NoneMobile>
                                        <BarChart
                                            data={graphAllRegisters}
                                            width={400}
                                            height={240}
                                            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                                        </NoneMobile>
                                        <NoneDesktop>
                                        <BarChart
                                            data={graphAllRegisters}
                                            width={250}
                                            height={180}
                                            margin={{top: 10, bottom: 30, left: 20, right: 10}}/>
                                        </NoneDesktop>
                                    </>
                                    }
                                </Graph>
                            </Grid> 
                            <Grid item xs={12} lg={6} sm={6} className={classes.defaultPad2x}>
                                <Graph>
                                    <p style={{textAlign:'center'}}>
                                        Número de Registros por Equipamento
                                    </p>
                                    {!!graphAllRegistersUsers && 
                                    <>  {console.log("entrouuu")}
                                        <NoneMobile>
                                        <PieChart
                                            data={graphAllRegistersUsers[0]}
                                            width={400}
                                            height={240}
                                            margin={{top: 10, bottom: 50, left: 50, right: 10}}
                                            sort={null}/>
                                        </NoneMobile>
                                        <NoneDesktop>
                                        <PieChart
                                            data={graphAllRegistersUsers[0]}
                                            width={250}
                                            height={180}
                                            margin={{top: 10, bottom: 30, left: 20, right: 10}}
                                            sort={null}/>
                                        </NoneDesktop>
                                    </>
                                    }
                                </Graph>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid>
        </>
    )
}