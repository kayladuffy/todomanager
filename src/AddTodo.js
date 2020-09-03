import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmite = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo