import React from 'react' 
import ReactDOM from 'react-dom' 
import App from './App'
import MyProvider from './components/context/MyProvider'

const jsx=(
    <MyProvider><App /></MyProvider>
)

ReactDOM.render(jsx, document.getElementById('root'))