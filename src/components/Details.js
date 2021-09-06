import React, { Component } from 'react';
import {ProdukConsumer} from '../Context';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import { Fragment } from 'react/cjs/react.production.min';

class Detail extends Component {
    render() {
        return (
            <ProdukConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduk;
                    return (
                        <Fragment>
                            <Navbar title={title}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="card">
                                        <div className="text-center">
                                                <img src={img} alt={title} className="img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <h2>Model : {title}</h2>
                                            <p className="text-muted m-0">made by : <span>{company}</span></p>
                                            <h4 className="text-primary"><strong>Price : <span>Rp.</span>{price}</strong></h4>
                                            <p className="text-capitalize font-weight-bold mt-3 mb-0">some info by product</p>
                                            <p className="text-muted">{info}</p>
                                        </div>
                                        <div className="card-footer">
                                            <Link to="/">
                                                <button className="me-2 btn btn-danger">Back To Product</button>
                                            </Link>
                                            <button
                                                className="btn btn-success"
                                                disabled = {inCart?true:false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                            >
                                            {inCart ? "InCart" : "Add To Cart"}
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    );
                }}
            </ProdukConsumer>
        );
    }
}

export default Detail;