import React, { Fragment } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import { ProductConsumer } from '../../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {({
          cart,
          increment,
          decrement,
          removeItem,
          cartTotal,
          cartSubTotal,
          cartTax,
          clearCart
        }) => {
          if (cart.length > 0) {
            return (
              <Fragment>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList
                  cart={cart}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                />
                <CartTotals
                  cart={cart}
                  cartTotal={cartTotal}
                  cartTax={cartTax}
                  cartSubTotal={cartSubTotal}
                  clearCart={clearCart}
                />
              </Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
