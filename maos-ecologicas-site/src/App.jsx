import {useEffect} from 'react'
import Layout from './layouts/layout'
import Hero from './components/hero'
import QuemSomos from './components/quemsomos'
import Parceiros from './components/parceiros'
import UsoGeral from './components/usoGeral'
import Index from './components/estatisticas'
import './styles/global.css'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
     <Layout>
      <Hero/>
      <QuemSomos/>
      <Parceiros/>
      <UsoGeral/>
      <Index/>  
     </Layout>
    </>
  )
}

export default App
