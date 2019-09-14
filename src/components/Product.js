import React, { Fragment } from 'react';

const Product = ({ product }) => {
  return (
    <Fragment>
      <h2>{product.id}</h2>
    </Fragment>
  );
};

export default Product;
