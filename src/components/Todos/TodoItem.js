import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f3f3f3',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style= {this.getStyle()}>
                <p>
                    <input type="checkbox" style={{marginRight: '8px'}} onChange={this.props.markComplete.bind(this, id)} />
                    <button style={delBtnStyle} onClick={this.props.deleteNote.bind(this, id)} > X </button>
                    { title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
}

const delBtnStyle = {
    backgroundColor: '#f70000',
    color: '#fff',
    border: 'none',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right',
    padding: '5px 20px'
}


export default TodoItem;