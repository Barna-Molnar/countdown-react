import React from 'react';
import styled from 'styled-components';

import { keyframes } from 'styled-components';
// https://codepen.io/shshaw/pen/vKzoLL
const flipTop = keyframes`
  0% {
    transform: rotateX(0deg);
    z-index: 2;
 
  }
  0%, 99% {
    opacity: 0.39;
  }
  100% {
    transform: rotateX(-180deg);
    opacity: 0;
  }`;

const BoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  align-items: center;
  justify-content: space-between;

  .container {
    position: relative;
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--color-softRed);
    background-color: var(--color-blue);
    border-radius: 10px;
    font-size: 4.5rem;
    box-shadow: 0 10px 0px 0px var(--color--veryDark);
  }
  .container::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    top: 50%;
    background-color: black;
  }
  .container::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 50%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    top: 0;

    /// animation related stuff
    background-color: rgba(2, 1, 2, 0.1);
    display: block;

    transform-style: preserve-3d;
    width: 1.8em;
    transform: translateZ(0);

    /// animation

    /* animation-name: ${flipTop};
    animation-duration: 1s;

    animation-iteration-count: infinite; */
    /* 
    animation: ${flipTop} 1s cubic-bezier(0.37, 0.01, 0.94, 0.35) infinite;
    animation-fill-mode: both;
    transform-origin: center bottom; */
  }
  .label {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: var(--fontSize);
    color: var(--color-grayishBlue);
  }
`;

function Box({ title, number }) {
  return (
    <BoxStyles>
      <div className="container">
        <p>{number}</p>
      </div>
      <p className="label">{title}</p>
    </BoxStyles>
  );
}

export default Box;
