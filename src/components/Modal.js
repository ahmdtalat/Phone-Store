import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <ProductConsumer>
      {({ modal, closeModal, modalProduct }) => {
        const { img, title, price } = modalProduct;
        if (!modal) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-capitalize text-center"
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} alt="product" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">Price: ${price}</h5>
                    <Link to="/">
                      <ButtonContainer
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Store
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        Go to Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
  #modal {
    background: var(--mainWhite);
  }
`;
export default Modal;
