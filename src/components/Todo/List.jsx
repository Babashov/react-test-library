import React from 'react'

function List({todoList}) {
  return (
    <div>
        <ul>
          {todoList.map((todo,index)=><li key={index}>{todo.fullname} - {todo.id}: {todo.description}</li>)}
        </ul>
    </div>
  )
}

export default List