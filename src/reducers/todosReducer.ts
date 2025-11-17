import { Todo } from "@/types/todotypes";
import getNextTodoId from "@/utils/getNextTodoId";


type Acction= |{type:'add';title:string}|{type:'delete';id:number}|{type:'change';todo:Todo}

export default function todosReducer (todos:Todo[],action:Acction){

    switch(action.type){
        case 'change':
            return todos.map((item)=>{
                if(item.id=== action.todo.id){
                    return{
                        ...item,
                        title:action.todo.title,
                        done:action.todo.done,
                    };
                }
                return item;
            })
          
        case 'add':
            return [
                ...todos,
                {
                    id:getNextTodoId(todos),
                    title:action.title,
                    done:false,
                }
            ]
        
        case 'delete':
            return  todos.filter((item)=> item.id !== action.id)
            break
        default:
            throw new Error("No Matching Action")
    }

}