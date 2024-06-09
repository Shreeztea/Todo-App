import TodoItem from "./TodoItem";
function TodoItems ({todoItems}) {
    return (
        <div className="container items-container">
            {todoItems.map((item) => (
                <TodoItem key={item.name} todoDate={item.date} todoName={item.name} />
            ))}
        </div>
    );
}

export default TodoItems;