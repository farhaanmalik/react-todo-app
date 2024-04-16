import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function TodoInput() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) {
      alert('Please enter a todo!');
      return;
    }
    else{
      dispatch(addTodo(input))
    }
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-1 mt-6 flex w-full">
      <input
        type="text"
        className="bg-gray-900 w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg w-40"
      >
        Add Todo
      </button>
    </form>
  )
}

export default TodoInput