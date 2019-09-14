import React, { useState, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

const ProductList = () => {
  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {({ products }) => {
                return products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
