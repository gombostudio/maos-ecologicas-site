import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import Modal from './modal';
import styles from './card.module.css';

const Card = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <img 
          src={event.coverImage} 
          alt={event.title}
          className={styles.cardImage}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{event.title}</h2>
          <div className={styles.cardInfo}>
            <div className={styles.infoItem}>
              <MapPin />
              <span>{event.location}</span>
            </div>
            <div className={styles.infoItem}>
              <Calendar />
              <span>{event.date}</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal 
          event={event} 
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Card;