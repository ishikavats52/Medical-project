import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './ContextApi/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Authprovider> <BrowserRouter> <React.StrictMode>
  <App />
</React.StrictMode></BrowserRouter></Authprovider>
 
 
)
