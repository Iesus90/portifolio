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
  display: grid;
  grid-template-columns: 310px 100px;
  column-gap: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Tech = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.title};
  font-size: 20px;
`;

export const React = styled.div`
  background-image: url(${({ theme }) => theme.iconReact});
  background-repeat: no-repeat;
  background-size: contain;
  width: 15%;
  height: 150%;

  @media (max-width: 768px) {
    width: 30%;
    height: 90%;
  }
`;

export const HTML = styled.div`
  background-image: url(${({ theme }) => theme.iconHTML});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;

export const CSS = styled.div`
  background-image: url(${({ theme }) => theme.iconCSS});
  background-repeat: no-repeat;
  background-size: contain;
  width: 45%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;

export const JS = styled.div`
  background-image: url(${({ theme }) => theme.iconJs});
  background-repeat: no-repeat;
  background-size: contain;
  width: 15%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;

export const Type = styled.div`
  background-image: url(${({ theme }) => theme.iconType});
  background-repeat: no-repeat;
  background-size: contain;
  width: 15%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;

export const Git = styled.div`
  background-image: url(${({ theme }) => theme.iconGit});
  background-repeat: no-repeat;
  background-size: contain;
  width: 15%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;

export const SQL = styled.div`
  background-image: url(${({ theme }) => theme.iconSQL});
  background-repeat: no-repeat;
  background-size: contain;
  width: 45%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;

export const Figma = styled.div`
  background-image: url(${({ theme }) => theme.iconFigma});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 150%;

  @media (max-width: 768px) {
    width: 25%;
    height: 190%;
  }
`;