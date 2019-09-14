import React, { createContext, useState } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [productDetails, setProductDetails] = useState(detailProduct);

  const hadleDetail = () => {
    console.log('hello from detail');
  };
  const addToCart = () => {
    console.log('hello from add to cart.');
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        productDetails: productDetails,
        hadleDetail: hadleDetail,
        addToCart: addToCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
