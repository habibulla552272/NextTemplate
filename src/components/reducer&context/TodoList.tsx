'use client'
import TodosContext from '@/contexts/todosContext'
import React, { useContext } from 'react'
import Todo from './Todo';

const TodoList = () => {
    const ctx=useContext(TodosContext);
    if(!ctx) return null;
  return (
    <div>
      {
        ctx.todos.map((todo)=>(
            <li key={todo.id}>
                <Todo
                 todo={todo}
                />


            </li>
        ))
      }
    </div>
  )
}

export default TodoList
