import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
  background-color: ${({ theme }) => theme.backgroundTitles};
  color: ${({ theme }) => theme.title};
  border: 2px solid ${({ theme }) => theme.borders};
  box-shadow: ${({ theme }) => theme.borders} 0px 0px 10px;
  border-radius: 10px;
  max-width: 400px;
  padding: 10px 10px 10px 10px;
  font-size: 20px;
`;

export const ContainerTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IFCE = styled.div`
  background-image: url(${({ theme }) => theme.iconIFCE});
  background-repeat: no-repeat;
  background-size: contain;
  width: 10%;
  height: 100%;

  @media (max-width: 768px) {
    width: 20%;
    height: 50%;
  }
`;

export const Tech = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  width: 50%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;