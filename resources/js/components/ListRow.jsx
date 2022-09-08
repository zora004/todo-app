import React, { Component } from 'react';


class TableRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="list-items list-group">
                <button
                    type="button"
                    className="list-group-item"
                    >{ this.props.data.title }</button>

            </div>
        )
    }
}

export default TableRow;
