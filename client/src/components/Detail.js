import React from 'react';
import Main from './Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper: {
      
      margin: 'auto',
      maxWidth: 414,
      textAlign:'center'
    },
    title: {
      flexGrow: 1,
    },
    image: {
      margin: 'auto',
      width: 200 ,
      height: 200,
      textAlign:'center'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    table: {
      maxWidth: 414,
    },
    add:{
      position:"fixed",
      marginTop:230,
      marginLeft:190
    }
}));


export default function Detail(props){
    

    const classes = useStyles();
  
    const name = ({props, name})=>{
      console.log(props, name);
    }
    return(      
      
      <div className={classes.root}>     

      <AppBar position="static" >
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
           <Link to="/"> <MenuIcon /></Link>
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={()=>{
            console.log(props.name);
          }}>
            {props.name}
          </Typography>
          
        </Toolbar>
      </AppBar>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.img} />
          </ButtonBase>
            
          </Paper>
        </Grid>
        <Grid item xs={12} boxShadow={0}>
          <Paper className={classes.paper}>{props.name}</Paper>
        </Grid>
          
        <Grid item xs={6}>
          <Paper className={classes.paper}>수량 : {props.number}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>0</Paper>
        </Grid>
        <Grid item xs={12} boxShadow={0}>
          <Paper className={classes.paper}>설명</Paper>
        </Grid>
        
      </Grid>
      <Fab color="primary" aria-label="add" className={classes.add}>
        <AddIcon />
      </Fab>
    </div>
    )
}
