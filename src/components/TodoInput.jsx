import { useState } from "react"

export default function TodoInput (props) {
    const {handleAddTodos, todoValue, SetTodoValue} = props
    

    return (
        <header>
            <input placeholder="Enter todo.." 
            value={todoValue} 
            onChange={(e) => {
            SetTodoValue(e.target.value)}}
            />
            <button onClick={() => {
                handleAddTodos(todoValue)
                SetTodoValue('')
            }}>ADD</button>
        </header>
    )
    
}