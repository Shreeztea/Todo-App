import { createContext,useReducer } from "react";

export const TodoItemsContext = createContext({ todoItems: [], addNewItem: () => { }, deleteItem: () => { } });


const todoItemsReducer = (currTodoItem, action) => {
    let newTodoItems = currTodoItem;
    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currTodoItem, { name: action.payload.todoName, date: action.payload.dueDate }]
    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = newTodoItems.filter((item) => { return item.name !== action.payload.todoItem });
    }
    return newTodoItems;
}


const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
    const addNewItem = (todoName, dueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                todoName,
                dueDate
            }
        }
        dispatchTodoItems(newItemAction);
    }
    const deleteItem = (todoItem) => {
        const newItemAction = {
            type: "DELETE_ITEM",
            payload: {
                todoItem
            }
        }
        dispatchTodoItems(newItemAction);
    }

    return (
        <>
            <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
                {children}
            </TodoItemsContext.Provider>
        </>
    );
}

export default TodoItemsContextProvider;
