import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propsTypes } from '../../types/props';
import './style.css';

const Cards = ({Title, Icon, textBody} : propsTypes) => {
  return (
    <div className='card'>
        <FontAwesomeIcon icon={Icon} size="2x" className="fa-spin" />
        <h1>{Title}</h1>
        <p>{textBody}</p>
    </div>
  )
}

export default Cards;