import { Component } from 'react';
import Main from './components/Main';
import MainAdd from './components/MainAdd';
import Detail from './components/Detail';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { CenterFocusStrong } from '@material-ui/icons';

import MapRoundedIcon from '@material-ui/icons/MapRounded';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import Basket from './Basket';
import WishList from './WishList';
import Navi from './components/Navi';

import List from './components/List';
import ListApp from './ListApp';
import ListAppN from './ListAppN';
import LoginApp from './LoginApp';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';
import { Button } from '@material-ui/core';
import Login from './components/Login';

const styles = theme => ({
  root : {
    width : '100%',
    height : '100px',
    minWidth: 375
    
  },
  menu : {
    
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  progress : {
    margin: theme.spacing.unit * 2
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  propgress: {
    margin: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputRoot: {
    color: 'inherit',
    
    
    
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  positioning : {
    width : '100%',
    height : '170px',

  },

  icons : {
    position:'fixed',
     border:"1px solid #ddd",
     backgroundColor:"#3F51B5",
     borderRadius:"30px",
     padding:10,
    fontSize:40,
  
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers:'',
      completed:0,
      searchKeyword: '',
      name:'',
      img:'',
      price:'',
      id : '',
      number : ''
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed: 0,
      searchKeyword: ''
    });

    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
   
  }


  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
 
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
  
    const body = await response.json();
  
    return body;
    
  }

 


  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.p_name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return  < Link to={`/detail/${c.p_name}`} onClick={()=>{
          this.state.name = c.p_name; this.state.img=c.image; this.state.price=c.price; this.state.id = c.barcode; this.state.number = c.number;
        }}><Main stateRefresh={this.stateRefresh} key={c.p_name} p_name={c.p_name}  image={c.image} price={c.price}/></Link>
      });
    }
    const { classes } = this.props;

    

    const title_main = {
      width : '110px',
      margin : 'auto',
      padding :'15px 20px',
      fontSize : '20px',
      float : 'center',
      textAlign : 'center',
      fontWeight: 'bold',
      color: ' white'
      
  }


    const search = {
      width : 'auto',
      float : 'center',
      margin : '10px',
      padding :'auto'
      
  }


  const login_basket_box = {
    width : '375px',
    height: '20px',
    float : 'center',
    
    
  }

  const login = {
    width : '50px',
    margin : 'auto',
    padding :'0px 20px',
    fontSize : '13px',
    float : 'left',
    fontWeight: 'bold',
    color: ' white',
    position : 'left',
    textAlign : 'center'

  }

  const Checklist = {
    width : '50px',
    margin : 'auto',
    padding :'0px 20px',
    fontSize : '13px',
    float : 'right',
    fontWeight: 'bold',
    color: ' white',
    position : 'right',
    textAlign : 'center'
    
  }
  const map = {
    color: ' white',
    marginLeft:'325',
    marginTop:'350'
  }
  


    const cellList1 = ["상품 추천"]
    return( 
    
      <div className={classes.root}>
        <Router>
        <Route path ="/" exact>
        <AppBar position="static">
             
          <div>          
            <div style={title_main} onClick = {() => {console.log("스마트 카트 클릭")}} > 스마트 카트 </div>
            
              <Link to ="/login"><div style={login} onClick = {() => {console.log("로그인 클릭")}}>로그인</div></Link>
              <Link to ="/ListApp"><div style={Checklist} onClick = {() => {console.log("리스트 클릭")}}>리스트</div></Link>
            
          </div>  
          <div style={search}>
            <div  className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
              <InputBase
                placeholder="상품 검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
                
              /></div>
            </div>
          
      </AppBar>
       <div className={classes.menu}>
        <MainAdd stateRefresh={this.stateRefresh}/>
        </div>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {cellList1.map(c => {
                  return <TableCell className={classes.tableHead}>{c}</TableCell>
                })}
                 </TableRow>
                 </TableHead>
                 <TableBody>
                 <div>
                 <Link to ="/Navi"> <MapRoundedIcon style={map} className={classes.icons}/></Link>
              </div>
              {this.state.customers ?
               filteredComponents(this.state.customers) :
              <TableRow>
                <TableCell colSpan="4" rowSpan="3" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table>            
      </Paper>
      
       
        </Route>
        <Route exact path="/Navi">
          <Navi/>
          

        </Route>
        <Route path ="/login">
              <LoginApp/>
        </Route>

        <Route path ="/register">
              <Register/>

        </Route>


        <Route path ="/basket">
              <Basket/>
        </Route>

        <Route exact path={`/detail/${this.state.name}`} 
        render={props=><Route.Component {...props} name={this.state.name}/>}>
          <Detail name={this.state.name} img={this.state.img} price={this.state.price} number={this.state.number} stateRefresh={this.stateRefresh} id={this.state.id}/>
        </Route>

        <Route exact path="/ListApp">
          <ListApp/>
          </Route>
        
        <Route exact path="/ListAppN">
          <ListAppN/>
          </Route>

          </Router>
    </div>
  

    );
  }
}
export default withStyles(styles)(App);