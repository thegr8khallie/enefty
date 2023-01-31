import styled from "styled-components"
import Loader from "./Loader"

const StyledModal = styled.div`
position: fixed;
top: 0;
left: 0;
transform: scale(1, 1);
width: 100vw;
height: 100vh;
display: grid;
place-items: center;
background-color: rgba(0,0,0,0.5);
opacity: ${({ isModalOpen }) => isModalOpen ? '1' : '0'};
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
animation: ${({ isModalOpen }) => isModalOpen && 'background-in 1s both'};
transition: .5s;
z-index: 10;
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  padding: 4.8rem 4rem;
  background-color: #37353b;
  color: #f9f9f9;
  opacity: ${({ isModalOpen }) => isModalOpen ? '1' : '0'};
visibility: ${({ isModalOpen }) => isModalOpen ? 'visible' : 'hidden'};
animation: ${({ isModalOpen }) => isModalOpen && 'modal-in 1s'};
  transition: 0.5s;
}
  @keyframes background-in {
    0% {scale: 0 0.005;}
    33% {scale: 1 0.005;}
    66%, 100% {scale: 1 1;}
  }
  @keyframes modal-in {
    0%, 66% {
      opacity: 0;
      visibility: hidden;
      translate: -50%, -50%;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Modal = ({ isModalOpen, toggleModal }) => {
  return (
    <StyledModal isModalOpen={isModalOpen} onClick={toggleModal}>
      <div className="modal">
        <Loader />
        <h3>
          Hello
        </h3>
        <button onClick={toggleModal}>Okay</button>
      </div>
    </StyledModal>
  )
}

export default Modal