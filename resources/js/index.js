import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';


if (document.getElementById('todo-list')) {
    ReactDOM.render(<TodoList />, document.getElementById('todo-list'));
}
