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
  // const todoItems = [
  //   {
  //     name: "Buy Milk",
  //     date: "4/10/2024"
  //   },
  //   {
  //     name: "Go to school",
  //     date: "5/10/2024"
  //   },
  //   {
  //     name: "Do assingment",
  //     date: "6/10/2026"
  //   }
  // ]
  return (
    <>
      <center className='todo-container'>
          <AppName />
          <AddTodo onNewItem={onNewItem} />
          <TodoItems todoItems={todoItems}/>
      </center>
    </>
  )
}

export default App
