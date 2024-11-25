
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

export function add(valor: any, lista: any, configLista: any, configCopia: any, configValor: any, configShow: any) {
    if (valor !== "") {


        let itemAdd: ITodo = { id: lista.length + 1, title: valor, completed: false }
        configCopia([...lista, itemAdd])
        configLista([...lista, itemAdd])
        configValor("")
        configShow(false)
    }
}

export function completed(id: number, lista: any, configLista: any, configCopia: any) {
    let itens = lista.map((item: any) => {
        if (item.id === id) {
            return { ...item, completed: !item.completed }
        }
        return item
    })
    configLista(itens)
    configCopia(itens)
}

export function remove(id: number, lista: any, configLista: any) {
    let itens = lista.filter((item: any) => item.id != id)
    configLista(itens)
}

export function filtragem(lista: any, status: string, configLista: any) {
    let dados;
    if ("completo" === status) {
        dados = lista.filter((item: any) => item.completed === true)
    }
    else if ("incompleto" === status) {
        dados = lista.filter((item: any) => item.completed === false)
    }
    if ("todos" === status) {
        dados = lista
    }
    configLista(dados)
}

export function order(lista: any, status: string, sortered: string, configLista: any, configSort: any) {
    if (status === 'asc' && sortered === "true") {
        configSort("false")
        configLista(lista.sort((a: any, b: any) => a.title.localeCompare(b.title)))

    }
    else if (status === 'desc' && sortered === "false") {
        configSort("true")
        configLista(lista.sort((a: any, b: any) => b.title.localeCompare(a.title)))
    }

}


