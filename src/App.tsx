import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BodySolucoes } from './components/BodySolucoes/BodySolucoes'
import {Ajuda} from './pages/Ajuda/Ajuda'
import { Organograma } from './pages/Organograma/Organograma'
import { SolucaoPorto } from './pages/SolucaoPorto/SolucaoPorto'
import { CentralSolucoes } from './pages/CentralSolucoes/CentralSolucoes'


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
