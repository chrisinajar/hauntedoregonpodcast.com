import styled from 'styled-components';

export const Link = styled.a`
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
