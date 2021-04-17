import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component {
    render(){
        return(
           <TableRow>
               <TableCell>{this.props.barcode}</TableCell>
               <TableCell>{this.props.p_name}</TableCell>
               <TableCell>{this.props.p_class}</TableCell>
               <TableCell><img src={this.props.image} alt="profile" style={{width:64, height:64}}/></TableCell>
               <TableCell>{this.props.number}</TableCell>
               <TableCell>{this.props.loc}</TableCell>
               <TableCell>{this.props.e_date}</TableCell>
               <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} barcode={this.props.barcode}/></TableCell>
           </TableRow>
        )    
    }
}
//<TableCell><img src={this.props.image} alt="profile" style={{width:64, height:64}}/></TableCell>

export default Customer;