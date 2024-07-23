import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css'
import { useState } from 'react'
import WelcomeMesaage from './components/WelcomeMesaage'
import { TodoItemsContext } from './store/todo-items-store'
function App() {
  const [todoItems, setTodoItems] = useState([])
  const addNewItem = (todoName, dueDate) => {
    setTodoItems((currValue) => [...currValue, { name: todoName, date: dueDate }])
  }
  const deleteItem = (todoItem) => {
    const newTodoItems = todoItems.filter((item) => { return item.name !== todoItem });
    setTodoItems(newTodoItems);
  }
  return (
    <>

      <center className='todo-container'>
          <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
            <AppName />
            <AddTodo/>
            <WelcomeMesaage></WelcomeMesaage>
            <TodoItems />
          </TodoItemsContext.Provider>
      </center>
    </>
  )
}

export default App
