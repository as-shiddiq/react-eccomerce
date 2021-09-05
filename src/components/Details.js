import React, { Component } from 'react';
import {ProdukConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Detail extends Component {
    render() {
        return (
            <ProdukConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduk;
                    return (
                        <div className="container py-5">
                            <div className="row text-center">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt={title} className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>Model : {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by : <span>{company}</span></h4>
                                </div>
                                <h4 className="text-blue"><strong>Price : <span>Rp.</span>{price}</strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">some info by product</p>
                                <p className="text-muted lead">{info}</p>
                                <div>
                                    <Link to="/">
                                        <ButtonContainer className="me-2">Back To Product</ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        cart
                                        disabled = {inCart?true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                    {inCart ? "InCart" : "Add To Cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProdukConsumer>
        );
    }
}

export default Detail;