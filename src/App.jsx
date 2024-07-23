import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css'
import { useState } from 'react'
function App() {
  const [todoItems,setTodoItems] = useState([])
  const onNewItem = (todoName,dueDate) => {
    setTodoItems([...todoItems,{name : todoName, date : dueDate}])
  }
  const handleDeleteItem = (todoItem) => {
    const newTodoItems = todoItems.filter((item) => { return item.name !== todoItem});
    setTodoItems(newTodoItems);
  }
  return (
    <>
      <center className='todo-container'>
          <AppName />
          <AddTodo onNewItem={onNewItem} />
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      </center>
    </>
  )
}

export default App
