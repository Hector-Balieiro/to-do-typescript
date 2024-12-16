
import { ITodo, ITodoService } from "../../data-interface";



export class TodosService implements ITodoService {
    async getAllTodos(): Promise<ITodo[]> {

        let data: any = []
        
        for (let v = 1; v < 4; v++) {
            let todos = await fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)
            let jsonTodos = await todos.json()
            data.push({ id: jsonTodos.id, title: jsonTodos.title, completed: jsonTodos.completed })
            
    
        
    }

            return data.map((todos: any) => ({
                id: todos.id,
                title: todos.title,
                completed: todos.completed
            }))
        }
}