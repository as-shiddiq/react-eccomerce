import React from 'react';

export default function CartColumns() {
    return (
        <div>
            <div className="container-fluid text-center d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Products Name</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Quantify</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-md-2">
                        <p className="text-uppercase">Total</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

