import React, { Component } from 'react';
import ViewTaskModal from './modals/ViewTaskModal';

class ListRow extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: null,
            taskTitle: null,
            taskDescription: null,
            dateCreated: null,
        }
    }

    getTaskDetails = (id) => {
        axios.get('/user/todo/'+id, {
            taskId: id
        }).then((response) => {
            this.setState({
                id: response.data.task[0].id,
                taskTitle: response.data.task[0].title,
                taskDescription: response.data.task[0].description,
                dateCreated: response.data.task[0].created_at,
            })
        })
    }

    render(){
        return (
            <div className="list-items list-group">
                <button
                    type="button"
                    className="list-group-item"
                    data-bs-toggle="modal"
                    data-bs-target={"#viewTaskModal" + this.props.data.id}
                    onClick={() => { this.getTaskDetails(this.props.data.id) }}
                    id={"task-item" + this.props.data.id}
                    >
                        <h5>{ this.props.data.title }</h5>
                        <small>{ this.props.data.created_at }</small>

                        </button>
                    <ViewTaskModal modalId={ this.props.data.id } taskDetails={this.state}/>
            </div>
        )
    }
}

export default ListRow;
