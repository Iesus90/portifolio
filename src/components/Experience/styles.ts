import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
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

export const Tech = styled.p`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
`;

export const ContainerXP = styled.div<{position: string}>`
  display: flex;
  justify-content: ${props => props.position};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const XP = styled.div`
  background-color: ${({ theme }) => theme.backgroundTitles};
  color: ${({ theme }) => theme.title};
  border: 2px solid ${({ theme }) => theme.borders};
  box-shadow: ${({ theme }) => theme.borders} 0px 0px 10px;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  font-size: 20px;
  margin: 2rem 0 0 0;
  padding: 1rem;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;