import { Component } from 'react';
import Main from './components/Main';

import MainAdd from './components/MainAdd';
import './App.css';
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


const styles = theme => ({
  root : {
    width : '20%',
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
    marginLeft: 10,
    width: '90%',
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers:'',
      completed:0,
      searchKeyword: ''
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
        return <Main stateRefresh={this.stateRefresh} key={c.p_name} p_name={c.p_name}  image={c.image} price={c.price}/>
      });
    }
    const { classes } = this.props;
    const login = {
      width : '60px',
      margin : '15px ',
      fontSize : '10px',
      float : 'left',
      fontWeight: 'bold'
      //onClick :'newPage()'

  }

    const title_main = {
      width : '110px',
      margin : '20px 130px',
      fontSize : '20px',
      float : 'center',
      position: 'center',
      fontWeight: 'bold'
      
  }

    const basket = {
      width : '60px',
      margin : '15px',
      fontSize : '10px',
      float : 'right',
      fontWeight: 'bold'
      
  }
    const search = {
      width : '350px',
      float : 'center',
      margin : '10px'
      
  }

    const cellList1 = ["베스트 상품"]
    const cellList2 = ["세일 상품"]
    return(
    <div className={classes.root}>
        <AppBar position="static">
      <div>
        {/* <div style={title_main} className={classes.title} variant="h5" >
              스마트 카트 
        </div>  */}
          <div style={title_main} onClick = {()=> {window.location.href = 'http://localhost:3000/'} }>스마트 카트 </div>
          <div style={login} onClick = {()=> window.location.href ='http://localhost:3000/Productimg.js'}  >로그인</div>
          {/* <div style={login} ><a  href="#" onclick="alert('Click'); return false; ">로그인</a></div> */}
          <div style={basket} onClick = {()=> {console.log("장바구니")}}>장바구니</div>
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
              {this.state.customers ?
               filteredComponents(this.state.customers) :
              <TableRow>
                <TableCell colSpan="4" rowSpan="3" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
            </TableBody>
          
                 <TableHead>
                 <TableRow>
                {cellList2.map(c => {
                  return <TableCell className={classes.tableHead}>{c}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
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
    </div>
    );
  }
}

export default withStyles(styles)(App);
