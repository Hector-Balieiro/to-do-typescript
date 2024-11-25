
import { useEffect, useState } from "react";
import { TodosService } from "../../data-layer/todos/todos.services"
import { ITodo } from "../../data-interface";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'react-bootstrap';
import { add, completed, remove, filtragem, order } from "../../data-layer/todos/todos.services";
export const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [todo, setTodo] = useState<ITodo[]>([])
  const [inputValue, setInputValue] = useState("")
  const [copia, setCopia] = useState<ITodo[]>([])
  const [sortBy, setSortBy] = useState("")


  useEffect(() => {
    setTimeout(() => {
      const todoList = new TodosService();
      todoList.getAllTodos().then((todos) => {
        setTodo(todos)
        setCopia(todos)
      }).catch(console.error)
    }, 1000)
  }, [])

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }} className="image-back">
      <div style={{ width: "80%" }} className="mt-5">
        <div className="mb-3">
          <button onClick={handleShow}>
            Criar Tarefa
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal de Exemplo</Modal.Title>
            </Modal.Header>
            <Modal.Body><input className="w-100" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input></Modal.Body>
            <Modal.Footer>
              <button onClick={handleClose}>
                Fechar
              </button>
              <button onClick={() => add(inputValue, todo, setTodo, setCopia, setInputValue, setShow)}>
                Salvar
              </button>
            </Modal.Footer>
          </Modal>
          <button onClick={() => filtragem(copia, "completo", setTodo)}>Completo</button>
          <button onClick={() => filtragem(copia, "incompleto", setTodo)}>Incompleto</button>
          <button onClick={() => filtragem(copia, "todos", setTodo)}>Todos</button>
          <button onClick={() => order(todo, "asc", "true", setTodo, setSortBy)}>ASC</button>
          <button onClick={() => order(todo, "desc", "false", setTodo, setSortBy)}>DESC</button>
        </div>

        <div>
          {todo.map((t, index) => {
            console.log(index, t.id)
            return (
              <div key={index} className="border mb-3 d-flex justify-content-between align-items-center content-height px-4">
                <p style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.title}</p>
                <div className="me-3">
                  <button onClick={() => completed(t.id, todo, setTodo, setCopia)} style={{ backgroundColor: t.completed ? "green" : "whitesmoke" }}><img src="check-square.svg"></img></button>
                  <button onClick={() => remove(t.id, todo, setTodo)} style={{ backgroundColor: "red" }}><img src="trash-fill.svg"></img></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}


