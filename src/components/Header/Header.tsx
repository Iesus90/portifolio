import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Language, getTranslation } from '../../translations/translationService';
import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import AnimatedFlags from '../AnimatedFlags/AnimatedFlags';
import { Theme } from '@/theme';
import * as S from './styles';

interface Props {
  dark: Theme;
  light: Theme;
  selectedTheme: any;
  setSelectedTheme: (theme: Theme) => void;
}

const Header = ({ dark, light, selectedTheme, setSelectedTheme }: Props) => {
  const selectedLanguage = useSelector((state: RootState) => state.language);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderNav>
          <S.HeaderUl>
            <S.Options>
              {getTranslation('about', selectedLanguage.language as Language)}
            </S.Options>
          </S.HeaderUl>
          <S.HeaderUl>
            <S.Options>
              {getTranslation('technologies', selectedLanguage.language as Language)}
            </S.Options>
          </S.HeaderUl>
          <S.HeaderUl>
            <S.Options>
              {getTranslation('education', selectedLanguage.language as Language)}
            </S.Options>
          </S.HeaderUl>
          <S.HeaderUl>
            <S.Options>
              {getTranslation('experience', selectedLanguage.language as Language)}
            </S.Options>
          </S.HeaderUl>
          <S.HeaderUl>
            <S.Options>
              {getTranslation('projects', selectedLanguage.language as Language)}
            </S.Options>
          </S.HeaderUl>
          <AnimatedIcon
            dark={dark}
            light={light}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
          />
          <AnimatedFlags />
        </S.HeaderNav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
