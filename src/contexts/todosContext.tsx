'use client'
import initialTodos from "@/data/initialTodos";
import todosReducer from "@/reducers/todosReducer";
import { Todo } from "@/types/todotypes";
import { createContext, ReactNode, useReducer } from "react";

interface TodosContextType{
    todos:Todo [],
    onAddTodo:(title:string)=> void;
    onChange:(todo:Todo)=> void;
    onDelete:(id:number)=>void;
}

const TodosContext = createContext<TodosContextType | null>(null);

export default TodosContext;

export const TodosContextProvider = ({children}:{children:ReactNode}) => {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos)
    const handelChangeTodo = (todo:Todo) => {
        dispatch({
            type: 'change',
            todo,
        })
    }
    const handeldeleteTodo = (id:number) => {
        dispatch({
            type: 'delete',
            id,

        })
    }
    const handelAddTodo = (title:string) => {
        dispatch({
            type: 'add',
            title,
        })
    }

    return (
        <TodosContext value={{
            todos,
            onAddTodo: handelAddTodo,
            onChange: handelChangeTodo,
            onDelete: handeldeleteTodo,

        }} >

            {children}

        </TodosContext >
    )


}

