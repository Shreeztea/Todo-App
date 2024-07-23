import { useRef, useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
    const { addNewItem } = useContext(TodoItemsContext);
    const todoName = useRef();
    const dueDate = useRef();
    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        if(todoName.current.value != '') {
            addNewItem(todoName.current.value,dueDate.current.value)
        }
        todoName.current.value = "";
        dueDate.current.value = "";
    }
    return (
        <div className="container text-center">
            <div className="row ss-row">
                <div className="col-6">
                    <input type="text" name="todo_name" id="" placeholder='Enter Todo here' ref={todoName}/>
                </div>
                <div className="col-4">
                    <input type="date" name="due_date" id="" ref={dueDate} />
                </div>
                <div className="col-2">
                    <button type="button" onClick={handleAddButtonClicked} className="btn btn-success ss-button">
                        <IoMdAdd />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;