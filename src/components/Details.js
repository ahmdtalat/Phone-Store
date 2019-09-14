import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

const Details = () => {
  return (
    <ProductConsumer>
      {({ productDetails, addToCart, handleDetail }) => {
        const { id, company, img, info, price, title, inCart } = productDetails;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="product" className="img-fluid" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-5 mb-2">
                  made by: <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    Price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <Link to="/">
                  <ButtonContainer>back to product</ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  onClick={() => {
                    addToCart(id);
                  }}
                  disabled={inCart ? true : false}
                >
                  {inCart ? 'inCart' : 'add to cart'}
                </ButtonContainer>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
