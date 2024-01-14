import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './Redux/Slice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  console.log(data)

  if(data.data.isLoading){
    return 'Loading....'
  }

  if(data.data.isError){
    return 'Error'
  }

  return (
    <>
      <button onClick={() => dispatch(fetchData())}>Show Data</button>
      {data.data.data && data.data.data.map((e) => <li>{e.title}</li>)}
    </>
  )
}

export default App
