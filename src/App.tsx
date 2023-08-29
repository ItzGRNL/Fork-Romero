import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './App.css'
import { StyledFooter } from './components/Footer/Footer.style'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export default App
