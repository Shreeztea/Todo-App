function AddTodo() {
    return (
        <div className="container text-center">
            <div className="row ss-row">
                <div className="col-6">
                    <input type="text" name="" id="" placeholder='Enter Todo here' />
                </div>
                <div className="col-4">
                    <input type="date" name="" id="" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success ss-button">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;