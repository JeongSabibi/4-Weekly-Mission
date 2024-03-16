import { useState } from 'react';
import close from '../../images/close.svg';
import './styles/modalPopupDelete.css';

function ModalPopupDelete(props) {
  const [modalPopupData, setModalPopupData] = useState(props.inputData);
  const handleClickButton = (e) => {
    // props.setInputData(modalPopupData);
    // props.setPopup(false);
    props.setInputData(modalPopupData);
    props.setPopup({
      ...props,
      [e.target.name]: false,
    });
  };
  const blockEvent = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="modal_container">
      <section className="modal_layout" onClick={blockEvent}>
        <img
          className="closeButtonImg"
          src={close}
          alt="closeButton"
          name={props.popupEdit}
          onClick={handleClickButton}
        ></img>
        <div className="modal_title_container">
          <p className="modal_title">폴더 삭제</p>
          <p className="modal_sub_title">폴더명</p>
        </div>

        <button name={props.popupEdit} className="delete_button" onClick={handleClickButton}>
          삭제하기
        </button>
      </section>
    </div>
  );
}

export default ModalPopupDelete;
