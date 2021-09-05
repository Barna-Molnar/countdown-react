import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const CounterStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

function Counter({ day, hour, minute, second }) {
  return (
    <CounterStyles>
      <Box number={day} title="days" />
      <Box number={hour} title="hours" />
      <Box number={minute} title="minutes" />
      <Box number={second} title="seconds" />
    </CounterStyles>
  );
}

Counter.defaultProps = {
  day: 10,
  hour: 10,
  minute: 10,
  second: 10,
};
export default Counter;
