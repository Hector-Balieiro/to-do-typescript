import { createContext, useState, useEffect } from "react";
import { ITodo } from "../data-interface";
import { TodosService } from "../data-layer/todos/todos.services"

interface ContextType {
    show: boolean;
    todo?: ITodo[];
    inputValue: string;
    copia?: ITodo[];
    sortBy?: string;
    add: () => void;
    completed: (id: number) => void;
    remove: (id: number) => void;
    filtragem: (status: string) => void;
    order: (status: string, sortered: string) => void;
    handleClose: () => void;
    handleShow: () => void;
    setInputValue: any;
    findValue: any;
    setFindValue:any;
    filter:any;
}

export const ContextData = createContext<ContextType | undefined>(undefined);
export const DataManipulation = ({children}:any) =>{
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [todo, setTodo] = useState<ITodo[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [copia, setCopia] = useState<ITodo[]>([]);
    const [sortBy, setSortBy] = useState("");
    const [findValue, setFindValue] = useState("");
    
    const todoList = new TodosService();
    let data : any = localStorage.getItem("myArray");
    let data2:any;

    
    useEffect(() => {
            todoList.getAllTodos().then((todos) => {
                console.log("estou ativado");
                data2 = data ? JSON.parse(data) : todos;
                localStorage.setItem("myArray", JSON.stringify(data2));
                setTodo(data2);
                setCopia(data2);
                if(data2.length === 0){
                    localStorage.removeItem("myArray")
                    setTodo(todos);
                setCopia(todos);
                }
                
            }).catch(console.error)
        
        
    }, [data2]);
            
        
      
      function add() {
        let newArray:any;
        if (inputValue !== "") {
    
    
            let itemAdd: ITodo = { id: todo.length + 1, title: inputValue, completed: false }
            newArray= [...todo, itemAdd];
            
           
        }
            localStorage.setItem("myArray",JSON.stringify(newArray));
            const repo:any = localStorage.getItem("myArray");
            const repo2 = JSON.parse(repo)
            setCopia(repo2);
            setTodo(repo2);
            
            setInputValue("")
            setShow(false)
            
    }

    function completed(id:number) {
        let itens = todo.map((item: any) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed }
            }
            return item
        })
        setTodo(itens)
        setCopia(itens)
    }

    function remove( id: number) {
        let itens = [...todo];
        let remover = itens.findIndex(item => item.id === id);
        itens.splice(remover, 1);
        setCopia(itens)
        setTodo(itens)
        data2 = itens
        localStorage.setItem("myArray", JSON.stringify(itens))
    }

    function filtragem(status:string) {
        let dados:any;
        if ("completo" === status) {
            dados = copia.filter((item: any) => item.completed === true)
        }
        else if ("incompleto" === status) {
            dados = copia.filter((item: any) => item.completed === false)
        }
        if ("todos" === status) {
            dados = copia
        }
        setTodo(dados)
    }

    function order(status: string, sortered: string) {
        if (status === 'asc' && sortered === "true") {
            setSortBy("false")
            setTodo(todo.sort((a: any, b: any) => a.title.localeCompare(b.title)))
    
        }
        else if (status === 'desc' && sortered === "false") {
            setSortBy("true")
            setTodo(todo.sort((a: any, b: any) => b.title.localeCompare(a.title)))
        }
    
    }


    const filter = todo.filter((item:any) => item.title.toLowerCase().includes(findValue.toLowerCase()));
           

        
        

    return <ContextData.Provider value={{show,todo,inputValue,copia,sortBy,add,completed,remove,filtragem,order,handleClose,handleShow,setInputValue,findValue,setFindValue,filter}}>{children}</ContextData.Provider>
}