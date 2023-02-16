import styled from "styled-components";

type Props = {
  picture: string;
  handleModalPopUp: () => undefined;
};

const ImageModal = ({ picture, handleModalPopUp }: Props) => {
  return (
    <Modal id="imageModal" onClick={() => handleModalPopUp()}>
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
  @media (max-width: 1100px) {
    height: 70%;
  }
  @media (max-width: 800px) {
    height: 60%;
  }
`;
