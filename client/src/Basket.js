import { Component } from 'react';
import List from './components/List';
import './App.css';
import Navi from './components/Navi';
import App from './App';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const styles = theme => ({
  root : {
    width : '100%'
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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

  userbox : {
    width : '100%',
    height : '30px',
    backgroundColor : 'red'
  },

  more : {
    width : '100%',
    height : '100%',
    margin : '5px 0px',
    fontWeight : 'bold',
    border : '1px solid',
    color : '#666666',
    opacity : '70%'
  },

  more2 : {
    width : '100%',
    height : '50px',
    margin : '5px 0px',
    fontWeight : 'bold',
    fontSize : '20px'
  },

  width : {
    width : '70%'
  },
  navigation : {
    height : '70px'
},
back : {
    width : '30px',
    height : '30px',
    float : 'left',
    margin : '20px'
},
jangbaguni : {
    width : '200px',
    height : '30px',
    float : 'left',
    margin : '20px 10px 20px 40px',
    color : '#666666',
    textAlign : 'center',
    textWeight : 'bold',
    fontSize : '20px'
},
line : {
    height : '3px',
    backgroundColor : "#888888",
    opacity : '30%'
},
cashbox : {
    width : '100%',
    height : '100px'
},
cashminbox : {
    width : '390px',
    height : '30px',
    float : 'left',
    margin : 10,
},
cashfont : {
    width: '150px',
    height : '30px',
    float : 'left',
    color : '#888888',
    fontSize : '20px',
    fontWeight : 'bold'
},
cashnumber : {
    width: '150px',
    height : '30px',
    float : 'right',
    color : '#888888',
    fontSize : '20px'
}


});

class Basket extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers:'',
      completed:0,
      searchKeyword: '',
      count : 1
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
    const response = await fetch('/api/customers/list');
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
        return <List stateRefresh={this.stateRefresh} key={c.barcode} id={c.barcode} image={c.image} p_name={c.p_name} price={c.price} count={c.count}/>
      });
    }

    const { classes } = this.props;
    const cellList = [" + 더 담으러 가기"]
    const cellList2 = ["총 57,200원 결제하기"]
    return(
      <Router>
      <div className={classes.root}>
      <Route exact path="/basket">
        {/* 사용자 프로필 부분 */}
        <div className={classes.navigation}> 
               <Link to="/smartcart"><ArrowBackIosRoundedIcon className={classes.back}/></Link>
               <div className={classes.jangbaguni}>장바구니</div>
        </div>
           <div className={classes.line}></div>
       
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="원하는 상품명을 검색하세요"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
              />
            </div>
          </Toolbar>
      </AppBar>
      
          <Table className={classes.table}>
          
            <TableBody>
           
              {this.state.customers ?
               filteredComponents(this.state.customers) :
              <TableRow>
                
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
                
              </TableRow>
              }
              {cellList.map(c => { 
                  return  <Link to ="/"><Button className={classes.more} align="center" stateRefresh={this.stateRefresh}>{c}
                  </Button></Link>
                      })}

            {/* 총 결제금액 부분 */}
            <div className = {classes.cashbox}>

                <div className={classes.cashminbox}>
                    <div className={classes.cashfont}>총 결제 금액</div>
                    <div className={classes.cashnumber}>57,200원</div>

                </div>

                <div className={classes.cashminbox}>
                    <div className={classes.cashfont}>결제방법</div>
                    <div className={classes.cashnumber}>신용/체크카드</div>

                </div>

            </div>

            {cellList2.map(c => { 
                  return  <Button variant="contained" color="secondary" className={classes.more2} align="center" stateRefresh={this.stateRefresh}>{c}
                  </Button>
                      })}
            </TableBody>
              
            
           
            </Table>  
            </Route>
            <Route exact path="/">
                      <App/>
            </Route>
            <Route exact path="/smartcart">
              <Navi/>
            </Route>
          

    </div>
    </Router>

    );
  }
}

export default withStyles(styles)(Basket);