import React from 'react';

import {Wrapper} from "./styles"
import Header from "../../components/Header"
import {Typography, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import {FaUserTag, FaUserTimes, FaUserPlus, FaUserEdit} from "react-icons/fa"

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
  }
})

export default function EditAdminUser (){

  const classes = useStyles()

  return (
      <>
      <Header />
      <Wrapper>
        <div className={classes.title}>
          <Typography variant="h4">ESCOLHA AÇÃO DESEJADA:</Typography>
        </div>
        <Grid container justify="center" item xs={12} lg={11} sm={11}>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaUserPlus className={classes.icon} size={22} />
              <Typography>CRIAR USUÁRIO</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaUserEdit className={classes.icon} size={22} />
              <Typography>EDITAR USUÁRIO</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaUserTag className={classes.icon} size={22} />
              <Typography>BUSCAR USUÁRIO</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className={classes.defaultPad}>
            <Grid item xs={12} lg={12} sm={12} className={classes.cardInfo}>
              <FaUserTimes className={classes.icon} size={22} />
              <Typography>EXCLUIR USUÁRIO</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
      </>
    )
}