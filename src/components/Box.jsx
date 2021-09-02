import React from 'react';
import styled from 'styled-components';

const BoxStyles = styled.div``;

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
