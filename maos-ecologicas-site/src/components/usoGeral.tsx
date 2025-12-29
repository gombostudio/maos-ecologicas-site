import { eventsData } from "../data/eventdata"
import Card from "./galeria/card"
import "./usoGeralStyle.css"

const UsoGeral = () => {
  return (
    
    <div className="geral" id="galeria">
      <div className="textos">
      <h1>Galeria <span>de Actividades</span></h1>
      <p>A nossa Galeria de Atividades é um espaço que celebra o impacto das nossas ações em prol do meio ambiente,
         reunindo registos de campanhas <br/>de limpeza, iniciativas de educação ambiental,
          projetos de reflorestamento e muitas outras ações desenvolvidas em parceria com as comunidades. </p>
      </div>
      <div className="cards">
        {eventsData.map((event) => (
            <Card key={event.id} event={event}/>
        ))}
      </div>
    </div>

  
  )
}

export default UsoGeral