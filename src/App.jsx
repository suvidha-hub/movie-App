import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/app.css'
import MovieCard from './components/movieCard'
import Home from './pages/home'
import { Routes,Route } from 'react-router-dom'
import Favorites from './pages/favorites'
import NavBar from './components/navBar'
import { MovieProvider } from './context/MovieContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
    
      <NavBar/>
       <main className='main-content'>
     <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/favorites" element={<Favorites/>}/>
     </Routes>
   </main>
  
    </MovieProvider>
  
  )
}

export default App
