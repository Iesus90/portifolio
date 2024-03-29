import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import AnimatedFlags from '../AnimatedFlags/AnimatedFlags';
import { Theme } from '@/theme';
import * as S from './styles';

interface Props {
  dark: Theme;
  light: Theme;
  // eslint-disable-next-line
  selectedTheme: any;
  setSelectedTheme: (theme: Theme) => void;
}

const Header = ({ dark, light, selectedTheme, setSelectedTheme }: Props) => {

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo/>
        <S.HeaderNav>
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
