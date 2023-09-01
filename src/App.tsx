import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BodySolucoes } from './components/BodySolucoes/BodySolucoes'
import './App.css'
import {Ajuda} from './pages/Ajuda/Ajuda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Ajuda />
    {/* <Header />
    <BodySolucoes />
    <Footer /> */}
    </>
  )
}

export default App
