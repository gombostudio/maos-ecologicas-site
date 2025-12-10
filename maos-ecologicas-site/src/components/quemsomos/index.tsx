import style from'./style.module.css'
import image from '../../assets/img/FGHE5433.JPG'
import Cards from '../cards/cards'
import { faLeaf, faEye, faHandsHelping } from '@fortawesome/free-solid-svg-icons';


const QuemSomos = () => {

const cardData = [
  {Title: 'Missão', textBody: 'Promover a educação ambiental e a sustentabilidade, conservando a biodiversidade por meio de ações participativas que envolvem comunidades.', Icon: faLeaf},
  {Title: 'Visão', textBody: 'Ser um movimento transformador que influencia políticas e cria medidas para salvaguardar o ambiente e o bem-estar social dos angolanos.', Icon: faEye},
  {Title: 'Valores', textBody: 'Sustentabilidade, Proteção da biodiversidade, Compromisso comunitário, Cultura e identidade, Transparência e responsabilidade.', Icon: faHandsHelping}

]

  return (
    <>
    <div className={style.quemSomos} id='quemsomos'>
     <div className={style.texts}>
        <div><h1>Quem <span>Somos</span></h1></div>
        <div>
            <p>
                Somos uma organização não governamental,
                sem fins lucrativos, criada por estudantes do curso de Engenharia do Ambiente da
                Universidade Metodista de Angola,<span> com intenção
                de trazer soluções para os problemas ambientais
                existentes no seio das nossas comunidades (Angola).
                Nossas atividades e projectos abrangem várias</span>
                áreas, dentro do fórum
                sustentabilidade e bem estar. Temos como
                principio base, equilibrar o desenvolvimento
                humano com a preservação dos recursos naturais.
            </p>
        </div>
     </div>

     <div className={style.image}>
      <img src={image}/>

     </div>

     <div className={style.cards}>
      {cardData.map((card, index) => (
        <Cards
         key={index}
         Icon={card.Icon}
         Title={card.Title}
         textBody={card.textBody}
        />
      ))}

     </div>
     </div>

    </>
  )
}

export default QuemSomos