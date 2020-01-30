import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, Typography,Toolbar, IconButton, Grid, useMediaQuery} from '@material-ui/core';
import {FaBars, FaInfo, FaCheck, FaTag, FaUserFriends} from "react-icons/fa"
import {FaPowerOff} from "react-icons/fa"
import { useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import history from "../../services/history"

import logo from "../../assets/logo-icon.png"
import ufal from "../../assets/ufal.png"

const useStyles = makeStyles({
  list: {
    width: 270,
  },
  header:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#071D41',
    color: "#fff",
  },
  root: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex:1
  },
  register:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  logosRight:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  nameRegister:{
    fontFamily: 'Michroma, sans-serif',
    color:'#e78200',
    fontSize: '18px',
    lineHeight:'2px',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  logo:{
    width:'55px',
    height: '45px',
    marginRight: '5px'
  },
  logoMenu:{
    width:'65px',
    height: '55px',
    marginRight: '5px',
    marginBottom: '10px'
  },
  logoUfal:{
    width:'35px',
    height: '48px',
    marginRight: '20px',
    '& + img':{
      marginRight: '0px',
    }
  },
  logoResponsive:{
    width:'24px',
    height: '35px',
    marginRight: '20px',
    '& + img':{
      marginRight: '0px',
    }
  },
  icons: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
  },
  hover: {
    "&:hover": {
      color: '#000',
      backgroundColor: '#eeeeee',
      borderRadius: '50%',
      transition: 'background 0.8s'
    }
  },
  menuRow:{
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginLeft: '5px'
  },
  menuText:{
    fontSize: '16px',
    paddingLeft: '15px',
    margin: 0
  }

});

export default function TemporaryDrawer(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleSignOut = () => {
    localStorage.removeItem('@register:token');
    localStorage.removeItem('@register:user');

    alert("Até breve!!!");

    history.push('/');
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    > 
    <div style={{backgroundColor: '#071D41', paddingTop: '15px', paddingBottom: '15px', marginBottom:'10px'}}>
      <div className={classes.register}>
          <img className={classes.logoMenu} src={logo} />
      </div>
    </div>
      <div><a className={classes.menuRow} href="initial#instrucoes">
          <FaTag size={22}/><h1 className={classes.menuText}>Instruções de Uso</h1></a>
      </div>
      <div><Link to="/register" className={classes.menuRow}>
        <FaCheck size={22}/><h1 className={classes.menuText}>Agendar Equipamento</h1></Link>
      </div>
      <div><a className={classes.menuRow} href="initial#equip">
          <FaUserFriends size={22}/><h1 className={classes.menuText}>Criado por</h1></a>
      </div>
      <div><a className={classes.menuRow} href="initial#about">
          <FaInfo size={22}/><h1 className={classes.menuText}>Sobre</h1></a>
      </div>
      <div><a className={classes.menuRow} href="" style={{width:'100%'}} onClick={handleSignOut}>
        <FaPowerOff size={22}/><h1 className={classes.menuText}>Sair</h1></a>
      </div>
    </div>
  );

  return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} lg={12}>
        <Toolbar className={classes.header}>
          <Grid item xs={2} sm={2} lg={2} className={classes.icons}>
            <IconButton className={classes.hover} onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
              <FaBars  />
            </IconButton>
          </Grid>
          <Grid item xs={6} sm={6} lg={6} className={classes.register}>
            <Link to='/' className={classes.register}>
              <img src={logo} className={classes.logo}/>
              {matches ? <Typography className={classes.nameRegister}>Register</Typography>
              : 
              null
              }
            </Link>
          </Grid>

          <Grid item xs={4} sm={4} lg={4} className={classes.logosRight}>
            <img src={ufal} className={matches ? classes.logoUfal : classes.logoResponsive} /> 
            <img src={ufal} className={matches ? classes.logoUfal : classes.logoResponsive} /> 
          </Grid>
          
    
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
      </Toolbar>
        </Grid>
      </Grid>
  );
}