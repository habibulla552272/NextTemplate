import AddToto from '@/components/reducer&context/AddToto'
import TodoList from '@/components/reducer&context/TodoList'
import { TodosContextProvider } from '@/contexts/todosContext'
import React from 'react'

const page = () => {
    return (
        <section>
            <h2>Simple Todo Application</h2>
            <TodosContextProvider>
                <AddToto />
                <TodoList />
            </TodosContextProvider>

        </section>
    )
}

export default page
