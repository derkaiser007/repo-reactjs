import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Left from './components/Left/Left'
import Right_Top from './components/Right_Top/Right_Top'
import Right_Bottom from './components/Right_Bottom/Right_Bottom'
import Center from './components/Center/Center'

function App() {

  return (
    <>
    <div className='container'>
      <div className="box">
        <Header />
      </div>
      <div className="box">
        <Left />
      </div>
      <div className="box">
        <Center />
      </div>
      <div className="box">
        <Right_Top />
      </div>
      <div className="box">
        <Right_Bottom />
      </div>
      <div className="box">
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
