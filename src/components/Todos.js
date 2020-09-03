import React from 'react'

const Todos = ({todos}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item">
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos</p> 
    )
    return (
        <div className="todos collection">
        
        </div>
    )
}