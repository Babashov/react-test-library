import { useState } from 'react'
import List from './List'
import AddTodo from './AddTodo'

function Todo() {
  const [todoList,setTodoList] = useState([])
  return (
    <div>
        <h1>Todo App</h1>
        
        <List todoList={todoList}/>
        <AddTodo todoList={todoList} setTodoList={setTodoList}/>
        
    </div>
  )
}

export default Todo