import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from 'react';

const add = {
    width : '15px',
    height : '15px',
    float : 'right',
    fontSize : '10px',
    margin : '2px 0px'
}

const minus = {
    width : '15px',
    height : '15px',
    float : 'left',
    fontSize : '10px',
    margin : '2px 0px'
}

const number = {
    width : '15px',
    height : '15px',
    float : 'left',
    fontSize : '10px',
    margin : '2px 0px 3px 15px'
}

function Counter() {

    const [count, setNumber] = useState(1);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <RemoveIcon style={minus} onClick = {onDecrease}/>
            <div style={number}>{count}</div>
            <AddIcon style={add} onClick = {onIncrease}/>
        </div>
    );
}


export default Counter;