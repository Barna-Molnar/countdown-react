import React from 'react';
import styled from 'styled-components';
import hills from '../images/pattern-hills.svg';

import { ImPinterest } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { RiFacebookBoxFill } from 'react-icons/ri';

const FooterStyles = styled.div`
  background-image: url(${hills});
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .socialmedia__container {
    width: 10rem;
    display: flex;

    justify-content: space-between;
    font-size: 24px;
    svg {
      fill: var(--color-grayishBlue);
      cursor: pointer;
      transition: all 0.15s;
    }
    svg:hover {
      fill: var(--color-softRed);
    }
  }
`;

function Footer() {
  return (
    <FooterStyles background={hills}>
      <div className="socialmedia__container">
        <RiFacebookBoxFill />
        <ImPinterest />
        <FaInstagram />
        {/* <img src={fb} alt="facebook-icon" />
        <img src={pinterest} alt="pinterest-icon" />
        <img src={insta} alt="instagram-icon" /> */}
      </div>
    </FooterStyles>
  );
}

export default Footer;
