import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css'
import WelcomeMesaage from './components/WelcomeMesaage'
import TodoItemsContextProvider from './store/todo-items-store'

function App() {
  
  return (
    <>
      <center className='todo-container'>
        <TodoItemsContextProvider>
            <AppName />
            <AddTodo/>
            <WelcomeMesaage></WelcomeMesaage>
            <TodoItems />
        </TodoItemsContextProvider>
      </center>
    </>
  )
}

export default App
