import React from 'react'
import ReactDOM from 'react-dom/client'
// import MyApp from './App.jsx'

const anotherUser = "chai aur code"
const reactElement = React.createElement(
   'a',
   {href: 'https://google.com', target: '_blank'},
   'click me to visit google',
   anotherUser // Evaluated expression
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
