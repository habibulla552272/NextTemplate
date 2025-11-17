'use client'
import TodosContext from '@/contexts/todosContext';
import React, { useContext, useState } from 'react'

const AddToto = () => {
    const [tittle,setTittle]=useState('');
    const ctx=useContext(TodosContext);
    if(!ctx) return null;
  return (
    <div className='flex gap-2'>
      <input type='text' value={tittle} placeholder='Add Task' onChange={(e)=> setTittle(e.target.value)} />
      <button onClick={()=>{
        ctx.onAddTodo(tittle)
       setTittle('')
    }
        
        }>Add Todo</button>
    </div>
  )
}

export default AddToto
