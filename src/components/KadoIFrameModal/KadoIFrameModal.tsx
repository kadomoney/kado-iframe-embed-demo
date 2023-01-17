import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 685,
    padding: 0,
    borderRadius: 12,
    overflow: 'visible'
  }
};

Modal.setAppElement('#root');

const KadoIFrameModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = (): void => {
    setModalIsOpen(true);
    setLoading(true);
  }

  const closeModal = (): void => {
    setModalIsOpen(false);
    setLoading(true);
  }

  return (
    <div className='container'>
      <button
        className='toggle-button'
        onClick={openModal}
      >
        <span>Buy Crypto</span>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.5358 4.46447L4.46469 11.5355M11.5358 4.46447L6.00037 4.46448M11.5358 4.46447L11.5358 10.0001' stroke='currentColor' strokeWidth='1.25' strokeLinecap='square' strokeLinejoin='bevel'></path></svg>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        style={customStyles}
      >
        <div className='close-container'>
          <button type='button' onClick={() => setModalIsOpen(false)}>
            +
          </button>
        </div>
        {loading 
          ? <div className='loader-container'>
              <div className='loader' />
            </div>
          : null
        }
        <div>
          {/* Buy USDC on Juno Network with wallet defined:
            * https://app.kado.money/?apiKey=API_KEY&product=BUY&onPayCurrency=USD&onRevCurrency=USDC&network=JUNO&onToAddress=juno1kzwg3y8munvvck7vfuf09807zpv92xa8d9wv5h
            *
            * Buy USDT on Injective
            * https://app.kado.money/?apiKey=API_KEY&product=BUY&onPayCurrency=USD&onRevCurrency=USDT&network=INJECTIVE&onToAddress=inj1vmsqmc9zh2epmv573qh3zr337kzf0k4c0hyk3e
            * 
            * More options available:
            * https://docs.kado.money
            */
          }
          <iframe
            src='https://app.kado.money/?apiKey=API_KEY'
            width='500'
            height='686'
            frameBorder={0}
            onLoad={() => setLoading(false)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default KadoIFrameModal;