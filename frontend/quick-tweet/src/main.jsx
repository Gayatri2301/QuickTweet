import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-cover bg-center " style={{ backgroundImage: "url('bg1.jpg')" }}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/dashboard' element={<App />}></Route>
      <Route path='*' element={<h1 className='text-white'><img className='w-full' src='404-error.jpg'/></h1>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  </StrictMode>,
)
