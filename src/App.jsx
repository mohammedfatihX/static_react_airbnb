import { useState } from 'react'
import './App.css'
import Navbar from './componant/Navbar'
import Hero from './componant/Hero'
import CardPlace from './componant/CardPlace'
import Card from './componant/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <CardPlace />
    </>
  )
}

export default App
