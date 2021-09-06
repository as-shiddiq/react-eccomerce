import React, { Component } from 'react';
import styled from 'styled-components';
import {ProdukConsumer} from '../Context';
import {Link} from 'react-router-dom';


class Modal extends Component {
    render() {
        return (
          <ProdukConsumer>
              {(value)=>{
                  const {modalOpen,closeModal} = value;
                  const {img,title,price} = value.modalProduk;
                  if(!modalOpen)
                  {
                      return null;
                  }
                  else
                  {
                      return (
                        <ModalContainer>
                            <div className="container">
                                <div id="modal" className="row">
                                    <div className="col-8 mx-auto py-3 col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Item Added to the Cart</h5>
                                        <img src={img} alt={title} className="img-fluid"/>
                                        <h5>{title}</h5>
                                          <h5 className="text-muted">price : Rp. <span>{price}</span></h5>
                                          <Link to="/">
                                              <button onClick={() => closeModal()} className="me-2 btn btn-warning">
                                                  Continue Shopping
                                              </button>
                                          </Link>
                                          <Link to="/cart">
                                              <button cart onClick={() => closeModal()} className="btn btn-success">
                                                Go to cart
                                              </button>
                                          </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                      );
                  }
              }}
          </ProdukConsumer>
        );
    }
}

export default Modal;

const ModalContainer =styled.div`
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba(0,0,0,.3);
    display : flex;
    align-items : center;
    justify-content : center;

    #modal {
        background : var(--mainWhite);

    }
`;