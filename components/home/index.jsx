import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Links from './links';

export default function Home() {
  const [foggy, setFoggy] = useState();

  useEffect(() => {
    setFoggy(true);
  }, []);

  return (
    <Container className={foggy ? 'foggy' : null}>
      <Logo src='/images/logo.png' />
      <Links />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  transition: background-color 10s, backdrop-filter 10s;
  transform: translate3d(0, 0, 0);

  &.foggy {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
  }
`;

const Logo = styled.img`
  position: relative;
  display: block;
  max-width: 50%;
  height: auto;

  @media (min-width: 900px) {
    width: 400px;
  }
`;
