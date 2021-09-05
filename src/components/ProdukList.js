import React, { Component } from 'react';
import Produk from './Produk';
import Title from './Title';
import {ProdukConsumer} from '../Context';

class ProdukList extends Component {
   
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title name="our" title="Produk"/>
                        </div>
                        <div className="row">
                            <ProdukConsumer>
                                {value => {
                                    return value.produks.map(produk=>{
                                        return <Produk key={produk.id} produk={produk}/>
                                    })
                                }}
                            </ProdukConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <div>
            //     <Produk />
            // </div>
        );
    }
}

export default ProdukList;