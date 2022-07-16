import React, { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'; // biblioteca para gerar ids aleatorios npm install uuid
import {BrowserRouter as Router, Route} from "react-router-dom"; // simular que está trocando de página
import axios from "axios"; // USANDO API

import "./App.css"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Programação',
        completed: true,
      },
    ]);
    
    // lista de dependencias, SEMPRE que essa variavel ou OBJ mudar, acontece algo
    useEffect(() => {
      const fetchTasks = async () => {
        const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?limit=10');
        setTasks(data);
      }

      fetchTasks();
    }, []) // se estiver vazio [], executa quando o componente App.jsx for montado (onLoad)

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map(task =>{
        if(task.id === taskId)
        {
          return {
            ...task, completed: !task.completed
          }
        }
        else if(task.id === 777)
        {
          console.log("chegou")
        }
        return task;
      })
      /*ao clicar numa task varre todas as tasks, com o task.map e caso o id da task seja igual ao id recebido
      retorna os dados da task e inverte seu estado de completed de false para true e vice-versa
      */
      setTasks(newTasks);
    }
    
    const handleTaskAdittion = (taskTitle) => {
      // const newTasks = [... tasks, {} = tudo que está em task mais algo que está vindo
      const newTasks = [...tasks, {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      }]

      setTasks(newTasks);
    }

    const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter( task => task.id !== taskId)

      setTasks(newTasks);
    }

    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact>
            <>
              <AddTask
                handleTaskAdittion={handleTaskAdittion}
              />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          </Route>
          <Route path="/:taskTitle" component={TaskDetails} />
        </div>
      </Router>
    )
}

export default App