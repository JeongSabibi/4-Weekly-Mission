import { useState } from 'react';

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalFunc, setModalFunc] = useState(null);

  const handleModalOpen = (func) => {
    setOpenModal(true);
    setModalFunc(func);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setModalFunc(null);
  };

  return {
    openModal,
    modalFunc,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
