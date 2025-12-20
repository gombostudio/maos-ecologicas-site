import { eventsData } from "../data/eventdata"
import Card from "./galeria/card"
import "./usoGeralStyle.css"

const UsoGeral = () => {
  return (
    
    <div className="geral" id="galeria">
      <div className="textos">
      <h1>Galeria <span>de Actividades</span></h1>
      <p>A Galeria de Atividades da nossa ONG Ambiental é um espaço que destaca as iniciativas e eventos voltados
         para a preservação do meio ambiente.<br/> Aqui, você encontrará registros de campanhas de limpeza, oficinas
          de educação ambiental e atividades de reflorestamento. </p>
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