import { useState } from 'react'
import './App.css'
import Entry from './components/Entry'
import Display from './components/Display'
import TodoContextProvider from './context/TodoContextProvider'

function App() {

  return (
    <TodoContextProvider>
    <div className="setup">
      <div className="entry">
        <Entry />
      </div>
      <div className="display">
        <Display />
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
