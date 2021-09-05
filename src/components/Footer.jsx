import React from 'react';
import fb from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';
import styled from 'styled-components';
import hills from '../images/pattern-hills.svg';

const FooterStyles = styled.div`
  /* position: absolute;
  bottom: 5rem; */

  background-image: url(${hills});
  background-position: ;
  background-repeat: no-repeat;
  z-index: 1000;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .socialmedia__container {
    width: 15rem;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 1.2rem;
    }
  }
`;

function Footer() {
  return (
    <FooterStyles background={hills}>
      <div className="socialmedia__container">
        <img src={fb} alt="facebook-icon" />
        <img src={pinterest} alt="pinterest-icon" />
        <img src={insta} alt="instagram-icon" />
      </div>
    </FooterStyles>
  );
}

export default Footer;
