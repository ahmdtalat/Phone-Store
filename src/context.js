import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  // handle details
  const handleDetail = (product) => {
    setProductDetails(product);
  };

  // get item with id
  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  // add to cart
  const addToCart = (id) => {
    let tempProducts = [...products];
    const product = tempProducts[tempProducts.indexOf(getItem(id))];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  // make a copy of the products
  const newProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };
  useEffect(() => {
    newProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products: products,
        productDetails: productDetails,
        handleDetail: handleDetail,
        addToCart: addToCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
