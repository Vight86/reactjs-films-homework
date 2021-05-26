import React from 'react';
import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Button from '../Button/index';
import Preloader from '../Preloader/index';
import styles from './Modal.scss';

const Modal = ({ isModalOpened, movieTrailerKey, handleModalToggle }) => {
  if (!isModalOpened) return null;

  const modal = (
    <div className={styles.modalWrapper}>
      <div className={styles.modalVideo}>
        <Button
          className="closeButton_inModal"
          onClick={() => handleModalToggle(null, isModalOpened)}
        >
          &times;
        </Button>
        {
          movieTrailerKey
          && (
            <iframe
              className={styles.modalIframe}
              src={`https://www.youtube.com/embed/${movieTrailerKey}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )
        }
        <Preloader className="inModal" />
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById('modal'));
};

Modal.propTypes = {
  isModalOpened: propTypes.bool.isRequired,
  movieTrailerKey: propTypes.string,
  handleModalToggle: propTypes.func.isRequired,
};

Modal.defaultProps = {
  movieTrailerKey: null,
};

export default Modal;
