import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Language, getTranslation } from '../../translations/translationService';
import * as S from './styles';

const Experience = () => {
  const selectedLanguage = useSelector((state: RootState) => state.language);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Title>
          {getTranslation('experience', selectedLanguage.language as Language)}
        </S.Title>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default Experience;
