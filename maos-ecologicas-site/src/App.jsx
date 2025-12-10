import {useEffect} from 'react'
import Layout from './layouts/layout'
import Hero from './components/hero'
import QuemSomos from './components/quemsomos'
import Card from './components/galeria/card'
import { eventsData } from './data/eventdata';
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
      <div className="gallery-grid">
        {eventsData.map((event) => (
          <Card key={event.id} event={event}/>
        ))}
      </div>
     </Layout>
    </>
  )
}

export default App
