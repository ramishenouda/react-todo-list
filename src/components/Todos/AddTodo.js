import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {        
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                        type="text" name="title" placeholder="Add Todo..."
                        style={titleInput} 
                        value = {this.state.title}
                        onChange = {this.onChange}
                    />
                    <input type="submit" value="Submit" className="btn" />
                </form>
            </div>
        )
    }
}

const titleInput = {
    flex: '10',
    padding: '5px',
    fontSize: '20px',
    border: '1px solid #666',
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;