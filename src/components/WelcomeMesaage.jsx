import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store';

export default function WelcomeMesaage() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
        {todoItems.length === 0 && <p>Enjoy your Day</p>}
    </>
  )
}
