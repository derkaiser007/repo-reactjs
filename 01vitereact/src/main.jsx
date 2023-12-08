import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//       <div>
//           <h1>Custom App</h1>
//       </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MyApp />
//   </React.StrictMode>,
// )



// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     anotherElement
// )



// const anotherUser = "X";
// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank' },
//   'click me to visit google',
//   anotherUser,
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     reactElement
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
