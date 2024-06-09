function TodoItem() {
    let todoName1 = "Buy Milk";
    let todoName2 = "Go to College";
    let todoDate = "4/10/2023";
    return (
        <div className="container items-container">

            <div className="row ss-row">
                <div className="col-6">
                    {todoName1}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger ss-button">
                        Delete
                    </button>
                </div>
            </div>
            <div className="row ss-row">
                <div className="col-6">
                    {todoName2}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger ss-button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;