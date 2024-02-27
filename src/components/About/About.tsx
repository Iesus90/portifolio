import { useTheme } from 'styled-components';
import { ReactTyped } from 'react-typed';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Language, getTranslation } from '../../translations/translationService';
import * as S from './styles';

const About = () => {
  const theme = useTheme();
  const selectedLanguage = useSelector((state: RootState) => state.language);

  return (
    <S.Container>
      <S.Dots1 />
      <S.Dots2 />
      <S.Circuits1 />
      <S.Circuits2 />
      <S.ContainerInfo>
        <S.ContainerTyped>
          <ReactTyped
            style={{
              color: theme.title,
              fontSize: '30px',
              fontWeight: 'lighter',
              borderRadius: '20px',
              padding: '10px 10px 10px 10px',
            }}
            strings={[`${getTranslation('hello', selectedLanguage.language as Language)} Iesus`]}
            typeSpeed={100}
            backSpeed={80}
            backDelay={2000}
            loop
          />
        </S.ContainerTyped>
        <S.Dev>{getTranslation('dev', selectedLanguage.language as Language)}</S.Dev>
        <S.ContainerSocial>
          <S.StyledPopup
            trigger={
              <a
                href="https://www.linkedin.com/in/iesus-batista-a75048193/"
                target="_blank"
                rel="noreferrer"
              >
                <S.Linkedin />
              </a>
            }
            position="bottom center"
            on={['hover', 'focus']}
          >
            <S.PopupLinkedin>Linkedin</S.PopupLinkedin>
          </S.StyledPopup>
          <S.StyledPopup
            trigger={
              <a
                href="https://github.com/Iesus90"
                target="_blank"
                rel="noreferrer"
              >
                <S.Github />
              </a>
            }
            position="bottom center"
            on={['hover', 'focus']}
          >
            <S.PopupGithub>Github</S.PopupGithub>
          </S.StyledPopup>
          <S.StyledPopup
            trigger={
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=iesus90@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <S.Gmail />
              </a>
            }
            position="bottom center"
            on={['hover', 'focus']}
          >
            <S.PopupGmail>Gmail</S.PopupGmail>
          </S.StyledPopup>
          <S.StyledPopup
            trigger={
              <a
                href="https://wa.me/5585988783872"
                target="_blank"
                rel="noreferrer"
              >
                <S.Whatsapp />
              </a>
            }
            position="bottom center"
            on={['hover', 'focus']}
          >
            <S.PopupWhatsapp>WhatsApp</S.PopupWhatsapp>
          </S.StyledPopup>
        </S.ContainerSocial>
      </S.ContainerInfo>
      <S.Me />
    </S.Container>
  );
};

export default About;
