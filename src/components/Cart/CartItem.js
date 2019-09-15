import React, { Fragment } from 'react';

const CartItem = ({ item, increment, decrement, removeItem }) => {
  const { id, img, title, count, price, total } = item;
  return (
    <Fragment>
      <div className="col-10 mx-auto col-lg-2 ">
        <img
          src={img}
          alt="product"
          className="img-fluid"
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2  ">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2  my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black  mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +
          </span>
          <span className="btn btn-black  mx-1">{count}</span>
          <span
            className="btn btn-black  mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <span className="d-lg-none">price: </span> ${price}
      </div>
      <div className="col-10 mx-auto col-lg-2  ">
        <div className="cart-icon">
          <i
            className="fas fa-trash"
            onClick={() => {
              removeItem(id);
            }}
          ></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2  ">
        <strong>item total: $ {total}</strong>
      </div>
    </Fragment>
  );
};

export default CartItem;
