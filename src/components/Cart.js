import React, { Component } from 'react';
import Title from './Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProdukConsumer} from '../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';


class Cart extends Component {
    render() {
        return (
            <section>
                <ProdukConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0)
                        {
                            return (
                                <React.Fragment>
                                    <Title name="Name" title="Title" />
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotal value={value} />
                                </React.Fragment>
                            )
                        }
                        else{
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProdukConsumer>
            </section>
        );
    }
}

export default Cart;