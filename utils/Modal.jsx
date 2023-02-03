import styled from "styled-components"
import Loader from './Loader'

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
opacity: ${({ isModalOpen }) => (isModalOpen ? '1' : '0')};
visibility: ${({ isModalOpen }) => (isModalOpen ? 'visible' : 'hidden')};
animation: ${({ isModalOpen }) => (isModalOpen && 'background-in 1s both')};
transition: .5s;
z-index: 10;
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  padding: 4rem;
  width: 90vw;
  max-width: 70rem;
  height: 30vh;
  background-color: #37353b;
  color: #f9f9f9;
  opacity: ${({ isModalOpen }) => (isModalOpen ? '1' : '0')};
  visibility: ${({ isModalOpen }) => (isModalOpen ? 'visible' : 'hidden')};
  animation: ${({ isModalOpen }) => (isModalOpen && 'modal-in 1s')};
  opacity: 1;
  .info-container {
    display: flex;
    gap: 4rem;
    align-items: center;
  }
  .button-container {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-top: 20%;
    a {
      flex-basis: 50%;
    }
    button {
      padding: 1rem;
      flex-basis: 50%;
      color: white;
      border: none;
      &.see {
        background-color: #3f48cc;
        width: 100%;
      }
      &.close {
        background-color: red;
      }
    }
  }
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

const Modal = ({ isModalOpen, toggleIsModalOpen, children, icon, tx, status }) => {
  return (
    <StyledModal isModalOpen={isModalOpen}>
      <div className="modal">
        <div className="info-container">
          <div>
            {icon}
          </div>
          <h3>
            {children}
          </h3>
        </div>
        {
          status === 'success' ?
            (
              <div className="button-container">
                <a href={`https://testnet.algoexplorer.io/tx/${tx}`} target="_blank" rel="noopener noreferrer">
                  <button className="see">See transaction</button>
                </a>
                <button className="close" onClick={toggleIsModalOpen}>Close</button>
              </div>
            ) : status === 'error' ?
              (
                <div className="button-container" style={{ justifySelf: 'flex-end' }}>
                  <button className="close" onClick={toggleIsModalOpen}>Close</button>
                </div>
              ) : null
        }
      </div>
    </StyledModal>
  )
}

export default Modal