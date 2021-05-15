
import React from 'react';
import './Navi.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    height:100
  },
  icons : {
    position:'fixed',
    
     border:"1px solid #ddd",
     backgroundColor:"#fff",
     borderRadius:"30px",
     padding:10,
    fontSize:60,
    
    

  },
}));


function Navi() {
  const classes = useStyles();
  return (
   
    <div>
       <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth="lg" disableGutters="true" style={{height:'100vh'}}>
        
        <LocationOnRoundedIcon className={classes.icons} style={{marginTop: 520, marginLeft:30,}} />
        <ReplayRoundedIcon style={{marginLeft:30, marginTop:600}} className={classes.icons}/>

        <MapRoundedIcon style={{marginLeft:320, marginTop:70}} className={classes.icons}/>   
        <Link to="/WishList"><ListRoundedIcon style={{marginLeft:320, marginTop:150}} className={classes.icons}></ListRoundedIcon></Link>
        <Link to="/Basket"><AddShoppingCartRoundedIcon style={{marginLeft:320, marginTop:230}} className={classes.icons}></AddShoppingCartRoundedIcon></Link>

      </Container>
    </React.Fragment>
    </div>
  );
}

export default Navi;
