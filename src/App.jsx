import AddTodo from './components/TodoInput'
import Todos from './components/TodoLists'

function App() {

  return (
    <>
      <div className='flex flex-col items-center w-full max-w-xl mx-auto px-4'>
        <h1 className='sm:mt-8 mt-5 text-white font-medium text-2xl text-center'>To Do App using React & Redux Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
