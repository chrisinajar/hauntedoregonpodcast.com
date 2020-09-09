import React from 'react';
import styled from 'styled-components';
import linkData from 'links';

export default function Links() {
  return linkData.map(renderLink);
}

function renderLink(data) {
  return (
    <Link href={data.href} target='_blank' alt={data.name}>
      {data.name}
    </Link>
  );
}

const Link = styled.a`
  color: black;
  margin-top: 25px;
  border: 1px solid #777;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px 40px;
  font-size: 24px;

  white-space: nowrap;

  &:hover,
  &:active {
    background-color: rgba(255, 255, 255, 0.5);
    color: ${({ theme }) => theme.colors.mainYellow};
  }
`;
