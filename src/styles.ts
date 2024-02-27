import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 50px 0 50px 50px;
  background-color: ${({ theme }) => theme.background};
`;
