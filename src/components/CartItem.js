import React from 'react';

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increase,decrease,removeItem} = value;
    return (
        <div className="row d-flex align-item-center justify-content-center my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-md-2">
                <img src={img}
                    alt={title}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                />
            </div>
            <div className="col-10 mx-auto col-md-2">
                <div className="d-lg-none">Product :</div>
                {title}
            </div>
            <div className="col-10 mx-auto col-md-2">
                <div className="d-lg-none">Price :</div> Rp.{price}
            </div>
            <div className="col-10 mx-auto col-md-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-outline-dark mx-1 fas fa-minus"
                            onClick={() => decrease(id)}
                        ></span>
                        <span className="btn btn-outline-dark mx-1">{count}</span>
                        <span className="btn btn-outline-dark mx-1 fas fa-plus"
                            onClick={() => increase(id)}
                        ></span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-md-2 align-middle">
                <div className="btn btn-icon btn-danger" onClick={() => removeItem(id)}>
                    <div className="fas fa-trash"></div>
                </div>
            </div>
            <div className="col-10 mx-auto col-md-2">
                <strong className="d-md-none">item total : </strong> <strong> Rp {total}</strong>
            </div>
            <hr className="d-md-none my-3"/>
        </div>
    );
}

