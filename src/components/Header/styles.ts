import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.backgroundHeader};
  z-Index: 10;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80%;
  width: 80%;
  margin: auto;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderUl = styled.div`
  display: flex;
`;

export const Options = styled.h1`
  font-size: 18px;
  font-weight: lighter;
  color: #CBE4DE;
  padding: 2.0rem;
  transition: all 250ms linear 0s;
`;
