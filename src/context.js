import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(1.6);
  const [cartTotal, setCartTotal] = useState(0);

  // increment
  const increment = (id) => {
    let tempProducts = [...products];
    const product = tempProducts[tempProducts.indexOf(getItem(id))];
    product.inCart = true;
    product.count += 1;
    const price = product.price;
    product.total += price;
    setProducts(tempProducts);
  };

  // decrement
  const decrement = (id) => {
    let tempProducts = [...products];
    const product = tempProducts[tempProducts.indexOf(getItem(id))];
    product.count -= 1;
    if (product.count <= 0) {
      product.inCart = false;
      let tempCart = [...cart];
      tempCart.splice(tempCart.indexOf(getItem(id)), 1);
      setCart(tempCart);
    } else {
      const price = product.price;
      product.total -= price;
    }
    setProducts(tempProducts);
  };

  // remove item
  const removeItem = (id) => {
    let tempProducts = [...products];
    const product = tempProducts[tempProducts.indexOf(getItem(id))];
    product.inCart = false;
    setProducts(tempProducts);
    let tempCart = [...cart];
    tempCart.splice(tempCart.indexOf(getItem(id)), 1);
    setCart(tempCart);
  };

  // clear cart
  const clearCart = () => {
    cart.map((item) => {
      return (item.inCart = false);
    });
    setCart([]);
  };

  // open modal
  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModal(true);
  };

  //close modal
  const closeModal = () => {
    setModal(false);
  };

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

  // watch for changes
  useEffect(() => {
    newProducts();
  }, []);

  // always increment when changes
  useEffect(() => {
    const getTotal = () => {
      let total = 0;
      if (cart.length > 0) {
        cart.map((item) => {
          return (total += item.total);
        });
      }
      return total;
    };
    const tempcartSubTotal = getTotal();
    const tempTax = tempcartSubTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = tempcartSubTotal + tax;
    setCartTax(tax);
    setCartSubTotal(tempcartSubTotal);
    setCartTotal(total);
  }, [cart, products]);

  return (
    <ProductContext.Provider
      value={{
        products: products,
        productDetails: productDetails,
        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal,
        modal: modal,
        modalProduct: modalProduct,
        cartSubTotal: cartSubTotal,
        cartTax: cartTax,
        cartTotal: cartTotal,
        clearCart: clearCart,
        removeItem: removeItem,
        increment: increment,
        decrement: decrement,
        cart: cart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
