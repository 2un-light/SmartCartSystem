import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
   
class ListAdd extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            open: false
        });
    }
   
    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    stateRefresh = () => {
        this.setState({
            open: false
        })
        alert("1 개의 상품이 추가되었습니다.");
    }

    addList(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'POST'
        });
        this.stateRefresh();
    }

    render() {
        return(
            <div>        
            <AddIcon fontSize="small" onClick={this.handleClickOpen}/>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle onClose={this.handleClose}>
                    알림
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        선택하신 상품을 추가하시겠습니까?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={(e) => {this.addList(this.props.id)}}>추가</Button>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            </div>
        )
        
    }

}
export default ListAdd;