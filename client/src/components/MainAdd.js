import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class MainAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            barcode: '',
            p_name: '',
            number: '',
            loc: '',
            e_date:'',
            fileName: '',
            price: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addMain()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            barcode: '',
            p_name: '',
            number: '',
            loc: '',
            e_date:'',
            fileName: '',
            price: '',
            open: false
        })
        
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.p_name] = e.target.value;
        this.setState(nextState);
    }
    
    addMain = () => {
        const url = '/api/customers';
        const formData = new FormData();
        
        formData.append('barcode', this.state.barcode);
        formData.append('p_name', this.state.p_name);
        formData.append('p_class', this.state.p_class);
        formData.append('image', this.state.image);
        formData.append('number', this.state.number);
        formData.append('loc', this.state.loc);
        formData.append('e_date', this.state.e_date);
        formData.append('price', this.state.price);
        const config = {
            headers: {
                'content-type':'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            barcode: '',
            p_name: '',
            number: '',
            loc: '',
            e_date:'',
            fileName: '',
            price: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div  onClick = {() => {console.log("추천알고리즘")}}>
               <h3> 추천 알고리즘 </h3>
            </div>
        )
    }
}

export default withStyles(styles)(MainAdd);