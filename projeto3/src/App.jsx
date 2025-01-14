import { useState } from 'react'
import './App.css';

function App() {
  const [todos,setTodos]=useState([
    {
      id:1,
      text:"Realizar tarefa 1",
      category:"trabalho",
      isCompreted: false,
    },
    {
      id:2,
      text:"Realizar tarefa 2",
      category:"estudos",
      isCompreted: false,
    },
    {
      id:3,
      text:"Realizar tarefa 3",
      category:"pessoal",
      isCompreted: false,
    },
  ]
    
  )


  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo)=>(
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              ({todo.category})
            </p>
          </div>
          <div>
            <button>Completar</button>
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default App
