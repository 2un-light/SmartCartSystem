import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MainDelete from './MainDelete';
import { ImageAspectRatioSharp } from '@material-ui/icons';
//import Productimg from './components/Productimg';

const box = {
    width : '70px',
    height : '110px',
    float : 'left',
    
    margin : '5px 5px'
    
}

const img = {
    width: '70px',
    height: '70px',
    float : 'left',
    margin : '0px 10px'
    
  }


const minbox = {
    width : '100%',
    height : '50px',
    float : 'center',
    margin : 5
    
}

const name = {
    width : '100%',
    
    margin : '5px',
    color : '#666666',
    fontSize : '5px'
}

const price = {
    width : '50px',
    height : '10px',
    margin : 0,
    fontSize : '10px',
    color : '#888888',
    fontWeight: 'bold'
}






class Main extends React.Component {
    
    render(){
        
        return(
            <div style={box}>
                
                <div style={img}>
                <img src={this.props.image}  alt="profile" style={{width:64, height:64}} onClick = {()=> {console.log(this.props.image)}}/></div>
                
                <div style={minbox}>
                    <div style={name}>{this.props.p_name}</div>
                    <div style={price}>{this.props.price}원 </div>
                </div>
                </div>
                
            )
            //console.log(this.props.image);

                
    }
    
}


//<TableCell><img src={this.props.image} alt="profile" style={{width:64, height:64}}/></TableCell>
//console.log(onclick.image);
export default Main;