import { Todo } from "@/types/todotypes";

export default function getNextTodoId(todos:Todo[]){
    if(todos.length ===0){
        return 1;
    }
    const maxId = todos.reduce((maxId:number,todo:Todo)=> Math.max(maxId,todo.id),0);

    return maxId+1;
}