import React, { useState } from 'react';
import ListDelete from './ListDelete';
import Counter from '../counter';

const box = {
    width : '100%',
    height : '150px',
    margin : '10px 0px 0px',
    color : '#888888',
    position : 'relative'
}

const img = {
    width : 100,
    height : 100,
    margin : 10,
    float : 'left',
    color : '#888888'
}

const minbox = {
    width : '100px',
    height : '100px',
    float : 'left',
    margin : '10px 5px 10px 40px'
}

const name = {
    width : '70px',
    height : '20px',
    margin: '10px 5px',
    color : '#666666',
    fontWeight: 'bold',
    fontSize : '12px'
}

const price = {
    width : '70px',
    height : '20px',
    margin : 5,
    color : '#888888',
    fontSize : '12px'
}

const numberbar = {
    width : '65px',
    height : '20px',
    margin : '5px 0px',
    color : '#666666',
    border : '1px solid',
    borderRadius : '20px'

}


const x = {
    width : '10px',
    height : '10px',
    margin : '20px',
    float : 'right',

}

class List extends React.Component {
    render(){
        return(
           <div style={box}> 
               <div><img src={this.props.image} alt="profile" style={img}/></div>
               <div style={minbox}>
               <div style={name}>{this.props.p_name}</div>
               <div style={price}>{this.props.price} 원 </div>
               <div style={numberbar}>
                <Counter/>
               </div>
               </div>
               <div style={x}><ListDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></div>
           </div>
        )    
    }
}


export default List;