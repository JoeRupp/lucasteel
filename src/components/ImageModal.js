import React from "react";
import styled from "styled-components";

const ImageModal = ({ picture, handleModalPopUp }) => {
  return (
    <Modal onClick={() => handleModalPopUp()}>
      <Image src={require(`../assets/photos/${picture}`)} />
    </Modal>
  );
};

export default ImageModal;

const Modal = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 96%;
  width: 96%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

const Image = styled.img`
  width: auto;
  height: 85%;
`;