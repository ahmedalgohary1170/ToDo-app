import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Todos from './components/Todos';
import CreatToDo from './components/CreatTodo';






function App() {
  const [todos,settodos] = useState([
    {title:'todos1',status:'INPROGRESS'},
    {title:'todos2',status:'DONE'},
    {title:'todos3',status:'INPROGRESS'},
    {title:'todos4',status:'DONE'},
  ])


  return (
  <div className='container'>
    <div className="row">
      <div className="col-lg-8 mx-auto my-5">
        <CreatToDo/>
        <Todos todos = {todos} settodos = {settodos}/>
      </div>
    </div>

  </div>
  )
}

export default App
