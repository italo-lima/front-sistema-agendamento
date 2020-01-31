import React, {useEffect, useState} from 'react';

import {Wrapper} from "./styles"
import Header from "../../components/Header"
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {FaUserTag, FaUserTimes, FaUserPlus, FaUserEdit} from "react-icons/fa"

import api from "../../services/api"
import FormUser from "../../components/FormUser"
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
  const [selectUser, setSelectUser] = useState({})

  const handleType = (type) => {
      setType(type)
  }

  const findSelectUser = (e) => {
    const user = users.find(user => user.id == e.target.value)
    !!user ? setSelectUser(user) : setSelectUser({})
  }

  const loadUsers = async ()=>{
    const token = localStorage.getItem('@register:token');
    const resp = await api.get('users', {headers: {
              Authorization: `Bearer ${token}`,
    }})
    
    setUsers(resp.data)
  }

  useEffect(() => {
    loadUsers()
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
              <button className={classes.btnOpc} onClick={() => {handleType('create'); setSelectUser({})}}>
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
              <button className={classes.btnOpc} onClick={() => {handleType('index');setSelectUser({})}}>
                <FaUserTag className={classes.icon} size={22} />
                <Typography>VISUALIZAR USUÁRIOS</Typography>
              </button>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => {handleType('delete');setSelectUser({})}}>
                <FaUserTimes className={classes.icon} size={22} />
                <Typography>EXCLUIR USUÁRIO</Typography>
              </button>
            </Grid>
          </Grid>
        
        </Grid>

        {/* Table create and edit */}
        {type === 'create' && 
          <FormUser title="Criar Usuário" typeAction={type} nameButton={"Criar"}/>
        }
        {type === 'edit' && 
         <>
         <select style={{padding: '10px', backgroundColor:"#fff", marginTop:'20px'}} onChange={findSelectUser}>
            <option>Escolha Usuário</option>
            {users.length && users.map(user => 
            <option key={user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </option>
        )}
         </select>
         
         {selectUser && <FormUser nameButton={"Atualizar"}
            user={selectUser} typeAction={type} title="Escolha usuário para editar" />}
         </>
        }
        {type === 'index' && 
          <>
            {users.length>0 && <TableUser typeAction={'index'} users={users} />}
          </>
        }
        {type === 'delete' && 
          users.length>0 && <TableUser typeAction={'remove'} users={users} />
        }
      </Wrapper>
      </>
    )
}