import React from 'react';
import styled from 'styled-components';

const BoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  .container {
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
