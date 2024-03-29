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
  justify-content: space-between;
  height: 80%;
  width: 90%;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    margin-right: 55px;
  }
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

export const Logo = styled.div`
  background-image: url(${({ theme }) => theme.logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 6%;
  height: 100%;
  margin: 10px 0 0 70px;

  @media (max-width: 768px) {
    width: 21%;
    height: 100%;
    margin: 10px 0 0 10px;
  }
`;
