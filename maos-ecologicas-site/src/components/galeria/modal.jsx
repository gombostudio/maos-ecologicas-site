import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import styles from './modal.module.css';

const Modal = ({ event, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % event.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalHeader} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalTitle}>{event.title}</div>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
          <ChevronLeft size={24} />
        </button>
        
        <img 
          src={event.images[currentIndex]} 
          alt={`${event.title} - ${currentIndex + 1}`}
          className={styles.galleryImage}
        />
        
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.modalFooter} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageCounter}>
          {currentIndex + 1} / {event.images.length}
        </div>
        <div className={styles.modalInfo}>
          <div className={styles.modalInfoItem}>
            <MapPin size={18} />
            <span>{event.location}</span>
          </div>
          <div className={styles.modalInfoItem}>
            <Calendar size={18} />
            <span>{event.date}</span>
          </div>
        </div>
        <p className={styles.description}>{event.description}</p>
      </div>
    </div>
  );
};

export default Modal;