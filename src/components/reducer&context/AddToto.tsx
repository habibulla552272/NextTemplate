'use client'

import TodosContext from '@/contexts/todosContext';
import React, { useContext, useState } from 'react';

const AddToto = () => {
  const [title, setTitle] = useState('');
  const ctx = useContext(TodosContext);
  if (!ctx) return null;

  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={title}
        placeholder="Add new task..."
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={() => {
          ctx.onAddTodo(title);
          setTitle('');
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
};

export default AddToto;
