import React, { Component } from 'react';
import ListRow from './ListRow';
import AddTaskModal from './modals/AddTaskModal';

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.getTodoList();
    }

    // Get employee list
    getTodoList = () => {
        let self = this;
        axios.get('/user/todo').then(function (response){
            self.setState({
                todos: response.data.list
            });
        });
    }

    render(){
        const current = new Date();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const date = `${current.getDate()} ${month[current.getMonth()]} ${current.getFullYear()}`;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card todo-card">
                            <div className="card-header">{date}</div>

                            <div className="card-body">
                            {
                                this.state.todos.map(function(x, i){
                                    return <ListRow key={i} data={x}/>
                                })
                            }
                            </div>

                            <a href=""
                                className="btn-add-todo"
                                data-bs-toggle="modal"
                                data-bs-target={"#addModal"}><i className="fa-solid fa-circle-plus"></i></a>
                            <AddTaskModal/> {/* THIS IS A MODAL */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
