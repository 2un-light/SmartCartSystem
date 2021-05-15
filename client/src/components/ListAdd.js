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

class ListAdd extends React.Component {

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
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addList()
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
    
    addList = () => {
        const url = '/api/customers';
        const formData = new FormData();
        
        formData.append('barcode', this.state.barcode);
        formData.append('p_name', this.state.p_name);
        formData.append('p_class', this.state.p_class);
        formData.append('image', this.state.image);
        formData.append('number', this.state.number);
        formData.append('loc', this.state.loc);
        formData.append('e_date', this.state.e_date);
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
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    상품 리스트 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>상품 리스트 추가</DialogTitle>
                    <DialogContent>
                    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.fileName} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {this.state.fileName === ""? "프로필 이미지 선택": this.state.fileName}
                        </Button>
                    </label>
                    <br/>
                    
                    <TextField label="상품명" type="text" name="p_name" value={this.state.p_name} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(ListAdd);