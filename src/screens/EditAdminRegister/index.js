import React, {useEffect, useState} from 'react';

import {Wrapper} from "./styles"
import Header from "../../components/Header"
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {FaPlus, FaTrashRestore, FaSearch, FaEdit} from "react-icons/fa"

import api from "../../services/api"
import FormRegister from "../../components/FormRegister"
import TableRegister from "../../components/TableRegister"

const useStyles = makeStyles({
  cardInfo: {
    backgroundColor: '#fff',
    display:'flex',
    height:'90px',
    alignItems:"center",
    justifyContent:"center"
},
  defaultPad:{
    padding:'10px 20px'
},
  title:{
    color:"#000",
    fontWeight: "bold",
    padding: "30px 0px",
    display:"flex",
    justifyContent:"center"
},
  icon:{
    margin: '10px'
  },
  btnOpc:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    border: 'none',
    background:'transparent',
    width: '100%',
    height:'100%',
  }
})

export default function EditAdminRegister (){

  const classes = useStyles()
  const [type, setType] = useState(null)
  const [equipments, setEquipments] = useState([])
  const [registers, setRegisters] = useState([])
  const [user, setUser] = useState({})

  const handleType = (type) => {
      setType(type)
  }

  const loadRegisters = async (token)=>{
    const resp = await api.get('register', {headers: {
              Authorization: `Bearer ${token}`,
    }})
    
    setRegisters(resp.data)
  }

  const loadEquipments = async (token)=>{
    
    const resp = await api.get('equipment', {headers: {
              Authorization: `Bearer ${token}`,
    }})
    
    setEquipments(resp.data)
  }

  useEffect(() => {
    const token = localStorage.getItem('@register:token');
    const resp = localStorage.getItem('@register:user');
    const {id} = JSON.parse(resp)
    setUser(id);
    loadRegisters(token);
    loadEquipments(token);
  }, [])

  return (
      <>
      <Header />
      <Wrapper>
        <div className={classes.title}>
          <Typography variant="h4">ESCOLHA AÇÃO DESEJADA:</Typography>
        </div>
        <Grid container justify="center" item xs={12} lg={11} sm={11} style={{maxHeight: '150px'}}>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => handleType('create')}>
                <FaPlus className={classes.icon} size={22} />
                <Typography>CRIAR REGISTRO</Typography>
              </button>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => handleType('index')}>
                <FaSearch className={classes.icon} size={22} />
                <Typography>VISUALIZAR REGISTROS</Typography>
              </button>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => handleType('delete')}>
                <FaTrashRestore className={classes.icon} size={22} />
                <Typography>CANCELAR REGISTRO</Typography>
              </button>
            </Grid>
          </Grid>
        
        </Grid>

        {/* Table create and edit */}
        {type === 'create' && 
          <FormRegister user={user} equipments={equipments} />
        }
        {type === 'index' && 
          <>
            {registers.length>0 && <TableRegister typeAction={'index'} registers={registers} />}
          </>
        }
        {type === 'delete' && 
          registers.length>0 && <TableRegister typeAction={'remove'} registers={registers} />
        }
      </Wrapper>
      </>
    )
}