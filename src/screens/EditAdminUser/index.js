import React, {useState} from 'react';

import {Wrapper} from "./styles"
import Header from "../../components/Header"
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {FaUserTag, FaUserTimes, FaUserPlus, FaUserEdit} from "react-icons/fa"

import api from "../../services/api"
import TableUser from "../../components/TableUser"

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
    color:"#fff",
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

export default function EditAdminUser (){

  const classes = useStyles()
  const [type, setType] = useState(null)
  const [users, setUsers] = useState([])

  const handleType = (type) => {
      setType(type)
      console.log("type", type)
  }

  const loadUsers = async ()=>{
    const token = localStorage.getItem('@register:token');
    const resp = await api.get('users', {headers: {
              Authorization: `Bearer ${token}`,
    }})
    
    setUsers(resp.data)
    console.log("res", resp.data)
  }

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
                <FaUserPlus className={classes.icon} size={22} />
                <Typography>CRIAR USUÁRIO</Typography>
              </button>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => {
                handleType('edit'); 
                loadUsers();
                }}>
                <FaUserEdit className={classes.icon} size={22} />
                <Typography>EDITAR USUÁRIO</Typography>
              </button>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => handleType('index')}>
                <FaUserTag className={classes.icon} size={22} />
                <Typography>BUSCAR USUÁRIO</Typography>
              </button>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => handleType('delete')}>
                <FaUserTimes className={classes.icon} size={22} />
                <Typography>EXCLUIR USUÁRIO</Typography>
              </button>
            </Grid>
          </Grid>
        
        </Grid>

        {/* Table create and edit */}
        {type === 'create' && 
          <TableUser title="Criar Usuário" typeRole="create" />
        }
        {type === 'edit' && 
          <div>
            <h1>Edit</h1>
          </div>
        }
        {type === 'index' && 
          <h1>BUSCAR</h1>
        }
        {type === 'delete' && 
          <h1>Deletar</h1>
        }
      </Wrapper>
      </>
    )
}