import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function TodoLists() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <div className='text-left w-full mt-6'>
        <div className='text-xl text-white'>Your Todo Lists</div>
        {todos.length > 0 ? (
          <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-2 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className='text-white'>{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        ) : (
          <div className='text-gray-300 pt-2'>Your todo lists is empty now, add some to do here !!</div>
        )}
      </div>
    </>
  )
}

export default TodoLists