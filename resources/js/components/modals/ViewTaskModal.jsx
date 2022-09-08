import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ViewTaskModal extends Component{
    constructor(props){
        super(props);
    }

    deleteEmployee = (id) => {
        axios.delete('user/todo/'+id, {
            taskId: id
        }).then((response) => {
            $('#viewTaskModal'+id).modal('toggle');
            toast.warning(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(()=>{
                window.location.reload(false);
            },2000)

        });
    }

    render(){
        return (
            //  Modal
            <div className="modal fade" id={"viewTaskModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.props.taskDetails.taskTitle}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  {this.props.taskDetails.taskDescription}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={ () => { this.deleteEmployee(this.props.taskDetails.id) } }>Delete</button>
                    <button type="submit" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default ViewTaskModal;
