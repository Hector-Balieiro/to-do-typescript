import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'react-bootstrap';
import { ContextData } from '../../context/context';
import { useContext } from 'react';
import './lista.css';


  



export const Lista = () =>{

    const contextData = useContext(ContextData)

    if(!contextData){
        throw new Error("TA faltando coisa");
    }

    const {show,inputValue,add,completed,remove,filtragem,order,handleClose,handleShow,setInputValue,findValue,setFindValue,filter} = contextData
    return(
            <div style={{ width: "80%" }} className="m-auto">
        <div className="mb-3 d-flex justify-content-around w-75 m-auto">
          <button className='btn btn-success btn-md botao' onClick={handleShow}>
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
              <button onClick={() => add()}>
                Salvar
              </button>
            </Modal.Footer>
          </Modal>
          <button  className='btn btn-success botao text-center' onClick={() => filtragem("completo")}>Completo</button>
          <button  className='btn btn-success botao text-center' onClick={() => filtragem("incompleto")}>Incompleto</button>
          <button  className='btn btn-success botao text-center' onClick={() => filtragem("todos")}>Todos</button>
          <button  className='btn btn-success botao text-center' onClick={() => order("asc", "true")}>ASC</button>
          <button  className='btn btn-success botao text-center' onClick={() => order("desc", "false")}>DESC</button>
          </div>
          <div className=' w-75 m-auto'>
            <input className='w-100 mb-3' type="text" value={findValue} onChange={(e)=>setFindValue(e.target.value)}></input>
          </div>
        

        <div>
          {filter.map((t:any, index:any) => {
            return (
              <div key={index} className="border mb-3 d-flex justify-content-between align-items-center content-height px-4">
                <p style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.title}</p>
                <div className="me-3">
                  <button onClick={() => completed(t.id)} style={{ backgroundColor: t.completed ? "green" : "whitesmoke" }}><img src="check-square.svg"></img></button>
                  <button onClick={() => remove(t.id)} style={{ backgroundColor: "red" }}><img src="trash-fill.svg"></img></button>
                </div>
              </div>
            )
          })}
        </div>
      </div> 
    )
}