import { useRef } from "react";
import { IconName } from "react-icons/fc";

function AddTodo({onNewItem}) {
    const todoName = useRef();
    const dueDate = useRef();
    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        if(todoName.current.value != '') {
            onNewItem(todoName.current.value,dueDate.current.value)
        }
        todoName.current.value = "";
        dueDate.current.value = "";
    }
    return (
        <div className="container text-center">
            <div className="row ss-row">
                <div className="col-6">
                    <input type="text" name="" id="" placeholder='Enter Todo here' ref={todoName}/>
                </div>
                <div className="col-4">
                    <input type="date" name="" id="" ref={dueDate} />
                </div>
                <div className="col-2">
                    <button type="button" onClick={handleAddButtonClicked} className="btn btn-success ss-button">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;