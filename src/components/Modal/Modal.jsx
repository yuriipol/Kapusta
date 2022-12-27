import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <button onClick={closeModal} className={s.close} type="button"></button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  close: PropTypes.func,
};
