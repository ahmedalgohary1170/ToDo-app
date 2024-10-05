



const CreatToDo = () => {




    return(
       <div className="container">
            <form className="row w-120">
                <div className="col-7">
                    <input type="text" className="form-control" placeholder="Enter Todo Title" />
                </div>
                <div className="col-2">
                    <select className="form-control">
                        <option value="DONE">DONE</option>
                        <option value="INPROGRESS">InProgress</option>

                    </select>
               
                </div>

                <div className="col-3">
                    <button type="submit" className="btn btn-primary"> Add ToDo </button>
                </div>

            </form>
       </div>
    )




}
export default CreatToDo