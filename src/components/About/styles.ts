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
`;

export const ContainerInfo = styled.div`
  flex-direction: column;
`;

export const ContainerTyped = styled.div`
  background-color: ${({ theme }) => theme.backgroundTitles};
  border: 2px solid ${({ theme }) => theme.borders};
  border-radius: 10px;
  max-width: 400px;
  padding: 10px 10px 10px 10px;
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
`;
