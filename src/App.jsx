import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NotFound from './pages/notFound/NotFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App