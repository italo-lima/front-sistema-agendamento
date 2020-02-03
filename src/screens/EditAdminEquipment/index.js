import React, {useEffect, useState} from 'react';

import {Wrapper, NoneDesktop, NoneMobile} from "./styles"
import Header from "../../components/Header"
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {FaPlus, FaTrashRestore, FaSearch, FaEdit} from "react-icons/fa"

import api from "../../services/api"
import FormEquipment from "../../components/FormEquipment"
import TableEquipment from "../../components/TableEquipment"

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
    textAlign:"center"
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
  const [equipments, setEquipments] = useState([])
  const [selectEquipment, setSelectEquipment] = useState({})

  const handleType = (type) => {
      setType(type)
  }

  const findSelectEquipment = (e) => {
    const equipment = equipments.find(equipment => equipment.id == e.target.value)
    !!equipment ? setSelectEquipment(equipment) : setSelectEquipment({})
  }

  const loadEquipments = async ()=>{
    const token = localStorage.getItem('@register:token');
    const resp = await api.get('equipment', {headers: {
              Authorization: `Bearer ${token}`,
    }})
    
    setEquipments(resp.data)
  }

  useEffect(() => {
    loadEquipments()
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
              <button className={classes.btnOpc} onClick={() => {handleType('create'); setSelectEquipment({})}}>
                <FaPlus className={classes.icon} size={22} />
                <Typography>CRIAR EQUIPAMENTO</Typography>
              </button>
            </Grid>
            <NoneDesktop style={{display:"none !important"}}>
              {type === 'create' && 
                <FormEquipment title="Criar Equipamento" loadEquipments={loadEquipments} 
                typeAction={type} nameButton={"Criar"}/>
              }
            </NoneDesktop>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => {
                handleType('edit'); 
                loadEquipments()
                }}>
                <FaEdit className={classes.icon} size={22} />
                <Typography>EDITAR EQUIPAMENTO</Typography>
              </button>
            </Grid>
            <NoneDesktop>
            {type === 'edit' && 
              <>
              <select style={{padding: '10px', backgroundColor:"#fff", marginTop:'20px'}} onChange={findSelectEquipment}>
                  <option>Escolha Equipamento</option>
                  {equipments.length && equipments.map(equipment => 
                  <option key={equipment.id} value={equipment.id}>
                    {equipment.name} - {equipment.code}
                  </option>
              )}
              </select>
              {equipments.length ==0? <h2 style={{paddingTop: "15px"}}>Nenhum Equipamento Cadastrado</h2>
              :
              selectEquipment && <FormEquipment nameButton={"Atualizar"}
                  equipment={selectEquipment} typeAction={type} title="Escolha equipamento para editar" />
              }
              </>
              }
            </NoneDesktop>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => {handleType('index');setSelectEquipment({})}}>
                <FaSearch className={classes.icon} size={22} />
                <Typography>VISUALIZAR EQUIPAMENTO</Typography>
              </button>
            </Grid>
            <NoneDesktop>
            {type === 'index' && 
              <>
                {equipments.length ==0? <h2 style={{paddingTop: "15px"}}>Nenhum Equipamento Cadastrado</h2>
                :
                <TableEquipment typeAction={'index'} equipments={equipments} />
                }
              </>
            }
            </NoneDesktop>
          </Grid>
          
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <button className={classes.btnOpc} onClick={() => {handleType('delete');setSelectEquipment({})}}>
                <FaTrashRestore className={classes.icon} size={22} />
                <Typography>EXCLUIR EQUIPAMENTO</Typography>
              </button>
            </Grid>
            <NoneDesktop>
            {type === 'delete' && 
              <>
                {equipments.length ==0? <h2 style={{paddingTop: "15px"}}>Nenhum Equipamento Cadastrado</h2>
                :
                <TableEquipment typeAction={'remove'} equipments={equipments} />
                }
              </>
              }
            </NoneDesktop>
          </Grid>
        
        </Grid>
        
        <NoneMobile>
        {/* Table create and edit */}
        {type === 'create' && 
          <FormEquipment title="Criar Equipamento" loadEquipments={loadEquipments} 
          typeAction={type} nameButton={"Criar"}/>
        }
        {type === 'edit' && 
         <>
         <select style={{padding: '10px', backgroundColor:"#fff", marginTop:'20px'}} onChange={findSelectEquipment}>
            <option>Escolha Equipamento</option>
            {equipments.length && equipments.map(equipment => 
            <option key={equipment.id} value={equipment.id}>
              {equipment.name} - {equipment.code}
            </option>
        )}
         </select>
         {equipments.length ==0? <h2 style={{paddingTop: "15px"}}>Nenhum Equipamento Cadastrado</h2>
         :
         selectEquipment && <FormEquipment nameButton={"Atualizar"}
            equipment={selectEquipment} typeAction={type} title="Escolha equipamento para editar" />
        }
        </>
        }
        {type === 'index' && 
          <>
            {equipments.length ==0? <h2 style={{paddingTop: "15px"}}>Nenhum Equipamento Cadastrado</h2>
            :
            <TableEquipment typeAction={'index'} equipments={equipments} />
            }
          </>
        }
        {type === 'delete' && 
        <>
          {equipments.length ==0? <h2 style={{paddingTop: "15px"}}>Nenhum Equipamento Cadastrado</h2>
          :
          <TableEquipment typeAction={'remove'} equipments={equipments} />
          }
        </>
        }
        </NoneMobile>
      </Wrapper>
      </>
    )
}