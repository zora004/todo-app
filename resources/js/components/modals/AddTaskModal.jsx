import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddTaskModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            taskTitle: null,
            taskDescription: null
        }
    }

    // Creating title state
    inputTaskTitle = (event) => {
        this.setState({
            taskTitle: event.target.value,

        });
    }
    // Creating title state
    inputTaskDescription = (event) => {
        this.setState({
            taskDescription: event.target.value,
        });
    }
    // Store task
    storeTask = () => {
        console.log(this.state.taskTitle);
        axios.post('user/todo ', {
            taskTitle: this.state.taskTitle,
            taskDescription: this.state.taskDescription
        }).then(() => {
            console.log('Done');
        })
    }

    render(){
        return (
            //  Modal
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add your task here</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form className='form'>
                        <div className="mb-3">
                            <label htmlFor="task-title" className="form-label">Task Title</label>
                            <input type="text" className="form-control" id="task-title" placeholder="Title here" onChange={this.inputTaskTitle}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="task-description" className="form-label">Description</label>
                            <textarea className="form-control" id="task-description" rows="3" placeholder="(Optional)" onChange={this.inputTaskDescription}></textarea>
                        </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success" onClick={this.storeTask}>Save Changes</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default AddTaskModal;
