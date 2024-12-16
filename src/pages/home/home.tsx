import './home.css';
import { Link } from 'react-router-dom';
export const Home = ()=>{

         
    
    return(
        <div className="position-relative fundo">
            <div className="w-25 text-center border position-absolute top-50 start-50 translate-middle estilo-fonte p-2">
            <h1>Lista de tarefa.</h1>
            <p>Seja bem vindo à lista de tarefas, aqui você pode criar tarefas para organização do seu dia a dia</p>
            <p>Clique no botão abaixo e aproveite a lista</p>
            
            <Link to="/lista"><button>Lista</button></Link>
            
                

            </div>
            
        </div>
    )
}