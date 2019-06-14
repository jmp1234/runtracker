import React, {Component, Fragment} from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import '../total_stats.scss';

class TableModal extends Component {
    state = {
        show: false,
        deleteSuccess: true,
      };


    handleClose=()=> {
      this.setState({ 
        show: false,
        deleteSuccess: true,
      });
    }

    handleShow=()=> {
      this.setState({ show: true });
    }

    componentDidMount(){
      this.setState({
        deleteSuccess:true
      })
    }

    deleteRun=(e)=>{
        const {id} = this.props
        e.preventDefault();
        axios.post('api/deleterun.php', { id: id }).then((resp) => {
          if(!resp.data.success) {
            this.setState({
              deleteSuccess: false,
            })
          } else {
            this.setState({
              show: false
            })
            this.props.displayActivityLogData();
          }
        })
    }

    render() {
      const {deleteSuccess} = this.state;
      const deleteMessage = deleteSuccess ? `Are you sure you want to delete your run from ${this.props.date}?` : 'You cannot delete pre-set guest runs';
      if(deleteSuccess === false){
        return (
          <Fragment>
            <Button variant="none" className="btn btn-sm btn-outline-danger" onClick={this.handleShow}>
              Delete
            </Button>
            <Modal className="col-12 text-center" show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="text-center mt-3 mx-5">{deleteMessage}</Modal.Title>
              </Modal.Header>
              <form onSubmit={this.deleteRun}>
              <Modal.Body>
              <Button type="button" variant="primary" onClick={this.handleClose}>
                  Okay
                </Button>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
              </form>
            </Modal>
          </Fragment>
        );
      }else{
        return (
          <Fragment>
            <Button variant="none" className="btn btn-sm btn-outline-danger" onClick={this.handleShow}>
              Delete
            </Button>
            <Modal className="col-12 text-center" show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="text-center mt-3 mx-5">{deleteMessage}</Modal.Title>
              </Modal.Header>
              <form onSubmit={this.deleteRun}>
              <Modal.Body>
              <Button type="button" variant="secondary" onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button variant="danger" type="submit" >
                  Delete
                </Button>
              </Modal.Body>
              <Modal.Footer>
</Modal.Footer>
              </form>
            </Modal>
          </Fragment>
        );
      }
    }
}
export default TableModal;
