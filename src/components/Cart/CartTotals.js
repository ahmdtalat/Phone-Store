import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ cartTotal, cartSubTotal, cartTax, clearCart }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">cart total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotals;
