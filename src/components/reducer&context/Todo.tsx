'use client'

import TodosContext from '@/contexts/todosContext'
import { TodoType } from '@/types/todotypes';
import React, { useContext, useState } from 'react'

const Todo = ({ todo }: { todo: TodoType }) => {
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(todo.title)

  const ctx = useContext(TodosContext);
  if (!ctx) return null;

  return (
    <div className='flex gap-2 items-center'>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => ctx.onChange({ ...todo, done: !todo.done })}
      />

      {edit ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              ctx.onChange({ ...todo, title: text });
              setEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p>{todo.title}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}

      <button onClick={() => ctx.onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
