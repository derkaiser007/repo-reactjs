import { Provider } from "react-redux"
import { store } from './store'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <Provider store={store}>
    <h1>Redux Toolkit</h1>
    <AddTodo />
    <Todo />
    </Provider>
  )
}

export default App
