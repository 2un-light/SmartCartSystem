import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

const  addbar = {
    position:"absolute",
    width : '100%',
    bottom : '0px',
    height : '50px',
    margin : '0px auto ',
    fontWeight : 'bold',
    fontAlign : 'center',
    fontSize : '20px',
    align : 'center',
    
  }


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
        alert("1개의 상품이추가되었습니다.");
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
            <Button fontSize="small" onClick={this.handleClickOpen} variant="outlined" color="secondary" style={addbar}> 추 가 하 기</Button>
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
                    <Button variant="contained" color="secondary" onClick={(e) => {this.addList(this.props.id)}}arl >추가</Button>
                    <Button variant="outlined" color="secondary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            </div>
        )
        
    }

}
export default ListAdd;