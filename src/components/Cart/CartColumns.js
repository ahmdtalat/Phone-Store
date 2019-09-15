import React from 'react';

const CartColumns = () => {
  return (
    <div className="container-fluid d-none d-lg-block text-center">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">totat</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
