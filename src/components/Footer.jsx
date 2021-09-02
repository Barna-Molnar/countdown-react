import React from 'react';
import fb from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';
import styled from 'styled-components';

const FooterStyles = styled.div`
  /* position: absolute;
  bottom: 5rem; */
  width: 15rem;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 1.2rem;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <img src={fb} alt="facebook-icon" />
      <img src={pinterest} alt="pinterest-icon" />
      <img src={insta} alt="instagram-icon" />
    </FooterStyles>
  );
}

export default Footer;
