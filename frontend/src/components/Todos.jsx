import { useState } from "react"







const Todos = ({todos,settodos,OnUpdateTodo}) => {

    const handleToDoUpdate =(todo)=>{
        const UpdateStatus =todo.status == "DONE" ? "INPROGRESS" : "DONE"
        fetch( `http://127.0.0.1:8000/todo/${todo.id}/`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({title:todo.title,status:UpdateStatus})
    }) 
    .then(response=>{
        return response.json()
    })

    }


    return(
        <div className="container mt-4">
            <ul className="list-group">
                {todos.map((todo,index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between"> 
                        <span>{todo.title}</span>
                        <button 
                        className={`btn btn-sm border ${todo.status == "DONE" ? "btn-success" : "btn-warning"}`} 
                        onClick={ ()=> handleToDoUpdate(todo)}>
                            {todo.status}
                            </button>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default Todos