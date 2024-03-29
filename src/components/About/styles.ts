import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Foto from '../../shared/images/me.png';
import DotsImage from '../../shared/images/dots.png';
import CircuitsImage from '../../shared/images/circuits.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 0 70px 70px;
  background-color: ${({ theme }) => theme.background};
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    padding: 70px 0 1rem 0;
    height: auto;
  }
`;

export const Dots1 = styled.div`
  position: absolute;
  background-image: url(${DotsImage});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
  top: 100px;
  right: 600px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dots2 = styled.div`
  position: absolute;
  background-image: url(${DotsImage});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
  top: 450px;
  right: 150px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Circuits1 = styled.div`
  position: absolute;
  background-image: url(${CircuitsImage});
  background-repeat: no-repeat;
  background-size: contain;
  width: 70px;
  height: 70px;
  top: 90px;
  right: 90px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Circuits2 = styled.div`
  position: absolute;
  background-image: url(${CircuitsImage});
  background-repeat: no-repeat;
  background-size: contain;
  width: 70px;
  height: 70px;
  top: 500px;
  right: 700px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerInfo = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerTyped = styled.div`
  background-color: ${({ theme }) => theme.backgroundTitles};
  border: 2px solid ${({ theme }) => theme.borders};
  box-shadow: ${({ theme }) => theme.borders} 0px 0px 10px;
  border-radius: 10px;
  max-width: 350px;
  padding: 10px 10px 10px 10px;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

export const Hello = styled.h1`
  background-color: ${({ theme }) => theme.backgroundTitles};
  border: 2px solid ${({ theme }) => theme.borders};
  color: ${({ theme }) => theme.title};
  font-size: 30px;
  font-weight: lighter;
  border-radius: 20px;
  max-width: 350px;
  padding: 10px 10px 10px 10px;
`;

export const Dev = styled.h1`
  color: ${({ theme }) => theme.backgroundHeader};
  overflow-wrap: break-word;
  font-weight: lighter;
  max-width: 530px;
  font-size: 70px;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 270%;
    margin: 5px;
  }
`;

export const ContainerSocial = styled.div`
  flex-direction: row;
`;

export const Linkedin = styled.button`
  background-image: url(${({ theme }) => theme.iconLinkedin});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin: 0 20px 0 10px;
`;

export const StyledPopup = styled(Popup)`
  &-arrow {
    color: ${({ theme }) => theme.backgroundPopup};
  }
`;

export const PopupLinkedin = styled.span`
  background-color: ${({ theme }) => theme.backgroundPopup};
  color: ${({ theme }) => theme.background};
  padding: 0 5px 0 5px;
  border-radius: 2px;
`;

export const PopupGithub = styled.span`
  background-color: ${({ theme }) => theme.backgroundPopup};
  color: ${({ theme }) => theme.background};
  padding: 0 5px 0 5px;
  border-radius: 2px;
`;

export const PopupGmail = styled.span`
  background-color: ${({ theme }) => theme.backgroundPopup};
  color: ${({ theme }) => theme.background};
  padding: 0 5px 0 5px;
  border-radius: 2px;
`;

export const PopupWhatsapp = styled.span`
  background-color: ${({ theme }) => theme.backgroundPopup};
  color: ${({ theme }) => theme.background};
  padding: 0 5px 0 5px;
  border-radius: 2px;
`;

export const Github = styled.button`
  background-image: url(${({ theme }) => theme.iconGithub});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin: 0 20px 0 10px;
`;

export const Gmail = styled.button`
  background-image: url(${({ theme }) => theme.iconGmail});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin: 0 20px 0 10px;
`;

export const Whatsapp = styled.button`
  background-image: url(${({ theme }) => theme.iconWhatsapp});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin: 0 20px 0 10px;
`;

export const Me = styled.div`
  background-image: url(${Foto});
  background-repeat: no-repeat;
  background-size: contain;
  width: 350px;
  height: 350px;
  margin-left: 100px;
  z-Index: 9;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-left: 40px;
  }
`;
