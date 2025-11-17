'use client'

import TodosContext from "@/contexts/todosContext";
import React, { useContext } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const ctx = useContext(TodosContext);
  if (!ctx) return null;

  return (
    <ul className="space-y-3 mt-4">
      {ctx.todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
