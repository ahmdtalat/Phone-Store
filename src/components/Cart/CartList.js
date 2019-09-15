import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cart, increment, decrement, removeItem }) => {
  return (
    <div className="container-fluid d-none d-lg-block text-center">
      <div className="row my-2 text-center text-capitalize">
        {cart.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartList;
