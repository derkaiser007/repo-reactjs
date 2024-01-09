import { Provider } from "react-redux"
import { store } from './store'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <Provider store={store}>
    <h1>Redux Toolkit</h1>
    <AddTodo />
    <TodoList />
    </Provider>
  )
}

export default App
