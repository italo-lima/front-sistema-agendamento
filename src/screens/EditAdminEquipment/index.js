import React from 'react';
import * as Yup from "yup"

import Header from "../../components/Header"
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import { Content,Wrapper } from './styles';
import {Link} from "react-router-dom"
import {Form, Input, Check} from "@rocketseat/unform"

import {FaPlus, FaTrashRestore, FaSearch, FaEdit} from "react-icons/fa"

const useStyles = makeStyles({
  cardInfo: {
    backgroundColor: '#fff',
    display:'flex',
    height:'90px',
    padding:'10px',
    alignItems:"center",
    justifyContent:"center"
},
  defaultPad:{
    padding:'10px 20px',
},
  title:{
    color:"#000",
    fontWeight: "bold",
    padding: "30px 0px",
    display:"flex",
    justifyContent:"center"
},
  titleTable:{
    color:"#000",
    fontWeight: "bold",
    padding: "30px 0px 0px 0px",
    display:"flex",
    justifyContent:"center"
},
  icon:{
    margin: '10px'
  }
})

export default function EditAdminEquipment (){

  const classes = useStyles()

  return (
      <>
      <Header />
      <Wrapper>
        <div className={classes.title}>
          <Typography variant="h4">ESCOLHA AÇÃO DESEJADA:</Typography>
        </div>
        <Grid container justify="center" item xs={12} lg={11} sm={11} style={{maxHeight: '100px'}}>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaPlus className={classes.icon} size={22} />
              <Typography>CRIAR EQUIPAMENTO</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaEdit className={classes.icon} size={22} />
              <Typography>EDITAR EQUIPAMENTO</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaSearch className={classes.icon} size={22} />
              <Typography>BUSCAR EQUIPAMENTO</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaTrashRestore className={classes.icon} size={22} />
              <Typography>EXCLUIR EQUIPAMENTO</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12} sm={12} justify="center">
          <Typography variant="h5" className={classes.titleTable}>Cadastrar Usuário</Typography>
          <Content>
              <Form /*schema={schema} onSubmit={handleSubmit} */>
                  <Input name="first_name" placeholder="Primeiro Nome" />
                  <Input name="last_name" placeholder="Último Nome" />
                  <Input name="registration" placeholder="Registro" />
                  <Input name="email" type="email" placeholder="Seu e-mail" />
                  <Input name="password" type="password" placeholder="Senha" />
                  <Input name="office" placeholder="Cargo" />
                  <Grid item xs={12} lg={12} sm={12} style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <Grid item container xs={6} lg={6} sm={6} alignItems="center">
                        <Check name="role" label="Admin?" style={{margin:"0px 10px"}}/>
                      </Grid>
                      <button type="submit" style={{color: '#fff'}}>Cadastrar</button>
                      
                  </Grid>
                  
                </Form>
            </Content>
        </Grid>
      </Wrapper>
      </>
    )
}