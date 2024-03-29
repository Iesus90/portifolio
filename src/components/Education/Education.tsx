import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Language, getTranslation } from '../../translations/translationService';
import * as S from './styles';

const Education = () => {
  const selectedLanguage = useSelector((state: RootState) => state.language);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Title>
          {getTranslation('education', selectedLanguage.language as Language)}
        </S.Title>
        <S.ContainerTech>
          <S.IFCE />
          <S.Tech>
            {getTranslation('educationInformation', selectedLanguage.language as Language)}
          </S.Tech>
        </S.ContainerTech>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default Education;
