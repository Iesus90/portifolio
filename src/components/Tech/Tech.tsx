import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Language, getTranslation } from '../../translations/translationService';
import * as S from './styles';

const Tech = () => {
  const selectedLanguage = useSelector((state: RootState) => state.language);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Title>
          {getTranslation('technologies', selectedLanguage.language as Language)}
        </S.Title>
        <S.ContainerTech>
          <S.Tech>
            <S.React />
            React / React Native
          </S.Tech>
          <S.Tech>
            <S.HTML/>
            HTML
          </S.Tech>
          <S.Tech>
            <S.JS />
            JavaScript
          </S.Tech>
          <S.Tech>
            <S.CSS/>
            CSS
          </S.Tech>
          <S.Tech>
            <S.Type/>
            TypeScript
          </S.Tech>
          <S.Tech>
            <S.SQL/>
            SQL
          </S.Tech>
          <S.Tech>
            <S.Git/>
            Git
          </S.Tech>
          <S.Tech>
            <S.Figma/>
            Figma
          </S.Tech>
        </S.ContainerTech>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default Tech;
