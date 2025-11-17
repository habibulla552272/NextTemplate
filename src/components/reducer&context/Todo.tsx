'use client'

import TodosContext from '@/contexts/todosContext'
import { TodoType } from '@/types/todotypes';
import React, { useContext, useState } from 'react'

const Todo = ({ todo }: { todo: TodoType }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.title);

  const ctx = useContext(TodosContext);
  if (!ctx) return null;

  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => ctx.onChange({ ...todo, done: !todo.done })}
          className="w-5 h-5 text-blue-600"
        />

        {edit ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <p className={`text-lg ${todo.done ? "line-through text-gray-400" : ""}`}>
            {todo.title}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {edit ? (
          <button
            onClick={() => {
              ctx.onChange({ ...todo, title: text });
              setEdit(false);
            }}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => ctx.onDelete(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
