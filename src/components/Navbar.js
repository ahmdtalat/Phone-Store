import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
const Navbar = () => {
  return (
    <div>
      <NavWrapper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}

        <Link to="/">
          <ButtonContainer className="navbar-brand">
            <i className="fas fa-store" />
          </ButtonContainer>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" /> my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    </div>
  );
};
const NavWrapper = styled.nav`
  background: var(--mainDark);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
