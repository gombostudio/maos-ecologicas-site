import style from './style.module.css'

const Card = (props) => {
  return (
    <div className={style.card}>
        <div>
        <h1>{props.id}</h1>
        <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Card