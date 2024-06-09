import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import './App.css'
function App() {

  return (
    <>
      <center className='todo-container'>
          <AppName />
          <AddTodo />
          <TodoItem />
      </center>
    </>
  )
}

export default App
