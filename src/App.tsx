import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BodySolucoes } from './components/BodySolucoes/BodySolucoes'
import {Ajuda} from './pages/Ajuda/Ajuda'
import { SolucaoPorto } from './pages/SolucaoPorto/SolucaoPorto'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SolucaoPorto />
    {/* <Header />
    <BodySolucoes />
    <Footer /> */}
    </>
  )
}

export default App
