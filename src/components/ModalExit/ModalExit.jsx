import s from './ModalExit.module.scss';

const ModalExit = ({ close }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  return (
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <button className={s.close} type="button" onClick={closeModal}></button>
        <p className={s.text}>Do you really want to leave?</p>
        <button className={s.buttonYes}>Yes</button>
        <button className={s.buttonNo} onClick={closeModal}>
          No
        </button>
      </div>
    </div>
  );
};

export default ModalExit;
