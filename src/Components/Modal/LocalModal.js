import React from 'react';
import {Button, Modal, ModalBody} from 'reactstrap';
import style from './LocalModal.module.css';

const LocalModal = (props) => {



  return (
    <div >
      <Modal isOpen={props.toggle} className={style.container}>
        <ModalBody className={style.body}>
          <p className={style.loginText}>{props.description}</p>
          <Button color="primary" onClick={() => props.onBtnClick(true)} className={style.loginBtn} style={props.btnStyle}>{props.btnText}</Button>{' '}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LocalModal;
