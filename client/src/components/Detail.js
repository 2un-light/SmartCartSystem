import React from 'react';
import Button from '@material-ui/core/Button';
import ListAdd from './ListAdd';
import Main from './Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';


import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Counter from '../counter';


import MobileStepper from '@material-ui/core/MobileStepper';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';


const back = { 
  color: ' white',
  marginTop: 5,
  marginLeft: 10,
}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      align : 'center',
      backgroundColor:'white'
    },
    menuButton: {
      marginRight: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper: {
      margin: '10px auto',
      width: '100%',
      height : '220px'
    },
    minbox : {
      width : '100%',
      height : '70px'
    },
    name : {
      width : '280px',
      height : '30px',
      fontSize : '23px',
      margin : '10px 20px 0px',
      color : '#111111',
      float : 'left'
    },
    star : {
      width : '200px',
      height : '20px',
      fontSize : '20px',
      margin : '5px 20px',
      color : '#111111',
      float : 'left',
      fontSize : '5px',
      color : '#FFD324'
    },
    share : {
      float : 'right',
      color : '#666666',
      margin : '25px 30px 0px',

    },
    total : {
      width : '180px',
      height : '30px',
      fontSize : '20px',
      margin : '15px 20px 0px',
      color : '#111111',
      float : 'left',
    },
    countext : {
      width : '180px',
      height : '30px',
      fontSize : '20px',
      margin : '0px 20px 0px',
      color : '#111111',
      float : 'left',
    },
    price : {
      width : '120px',
      height : '40px',
      fontSize : '25px',
      margin : '10px 20px 0px',
      color : '#111111',
      float : 'right',
      fontWeight : 'bold',
      textAlign : 'right',
    },
    title: {
      width : '100px',
      height : '30px',
      fontSize : '20px',
      margin : 'auto 0px auto 100px'

    },
    image: {
      margin: '0px auto',
      width: '100%',
      height: '300px',
      textAlign:'center',
      backgroundColor : 'white'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '90%',
    },

    table: {
      maxWidth: 414,
    },
    add:{
      position:"fixed",
      marginTop:230,
      
    },
    numberbar : {
      width : '65px',
      height : '20px',
      color : '#666666',
      border : '1px solid',
      borderRadius : '20px'
  
  },
  countbox : {
    width : '70px',
    height : '30px',
    margin : '5px 20px',
    float : 'right'
  },
  soo : {
    width : '100px',
    height : '30px',
    margin : '5px 20px',
    float : 'right',
    color : '#666666',
    fontSize : '13px'
  },

 

}));

export default function Detail(props){
    

    const classes = useStyles();
  
    const name = ({props, name})=>{
      console.log(props, name);
    }

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return(      
      
      <div>     
      <AppBar position="static" >
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
          <Link to="/"> <ArrowBackIosRoundedIcon style={back}  /></Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            상 품 정 보
          </Typography>
          
        </Toolbar>
      </AppBar>
      
      <div className={classes.image}>
      <img className={classes.img} alt="complex" src={props.img} /> 

      <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 2}/>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}/>
      }
    />
      </div>

      <Paper variant="outlined" className= {classes.paper}> 
      <div className={classes.minbox}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.share}><ShareOutlinedIcon style={{ fontSize: 30 }}/></div>
      <div className={classes.star}><StarRoundedIcon/><StarRoundedIcon/><StarRoundedIcon/><StarRoundedIcon/><StarOutlineRoundedIcon/></div>
      </div>

      <div className={classes.minbox}>
      <div className = {classes.total}> 최종 판매가</div>
      <div className={classes.price}>{props.price} 원</div>
      </div>

      <div className={classes.minbox}>
      <div className = {classes.countext}> 수량</div>
      <div className={classes.countbox}><div className={classes.numberbar}><Counter/></div></div>
      <div className = {classes.countext}/>
      <div className={classes.soo}>남은수량 : {props.number} 개</div>
      </div>
      </Paper>
      <Paper style ={{height : 60, textAlign : 'center', padding : 10, fontSize : 13}}> 
      상품 정보 <br/>
      <br/>
      더 매력적으로 돌아온 {props.name} ! 10% 적립행사
      </Paper> 
    
      <ListAdd stateRefresh={props.stateRefresh} id={props.id}></ListAdd>
      
    </div>
    )
}