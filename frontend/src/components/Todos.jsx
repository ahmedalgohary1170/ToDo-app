import { useState } from "react"







const Todos = () => {
    const [todos,settodos] = useState([
        {title:'todos1',status:'INPROGRESS'},
        {title:'todos2',status:'DONE'},
        {title:'todos3',status:'INPROGRESS'},
        {title:'todos4',status:'DONE'},
    ])


    return(
        <div className="container mt-4">
            <ul className="list-group">
                {todos.map((todo,index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between"> 
                        <span>{todo.title}</span>
                        <button className="btn btn-sm border">{todo.status}</button>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default Todos