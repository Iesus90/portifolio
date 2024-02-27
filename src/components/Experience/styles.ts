import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
`;

export const ContainerInfo = styled.div`
  flex-direction: collum;
`;

export const Title = styled.div`
  background-color: ${({ theme }) => theme.backgroundTitles};
  color: ${({ theme }) => theme.title};
  border: 2px solid ${({ theme }) => theme.borders};
  border-radius: 10px;
  max-width: 400px;
  padding: 10px 10px 10px 10px;
`;