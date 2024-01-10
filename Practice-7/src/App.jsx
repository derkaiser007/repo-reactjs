import './App.css'
import Center from './components/Center'
import RightBottom from './components/RightBottom'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {

  return (
    <>
    <Provider store={store}>
      <div className="container">
        <div className="left-top">LT</div>
        <div className="left-bottom">LB</div>
        <div className="right-top">RT</div>
        <div className="right-bottom"><RightBottom /></div>
        <div className="center"><Center /></div>
      </div>
    </Provider>
    </>
  )
}

export default App
