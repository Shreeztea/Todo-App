import { MdDelete } from "react-icons/md";function TodoItem({todoName,todoDate}) {
    return (
        <div className="container items-container">

            <div className="row ss-row">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger ss-button">
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;