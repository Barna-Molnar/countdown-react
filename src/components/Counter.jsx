import React, { useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

const CounterStyles = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem;
`;

function Counter() {
  const [day, setDay] = useState(12);
  const [hour, setHours] = useState(24);
  const [minute, setMinute] = useState(60);
  const [second, setSecond] = useState(60);

  return (
    <CounterStyles>
      <Box number={day} title="days" />
      <Box number={hour} title="hours" />
      <Box number={minute} title="minutes" />
      <Box number={second} title="seconds" />
    </CounterStyles>
  );
}

export default Counter;
