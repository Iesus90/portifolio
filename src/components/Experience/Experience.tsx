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
      <S.ContainerXP position='flex-start'>
        <S.XP>{
        `LAR - Laboratório de Redes de Computadores e Sistemas:
        ${getTranslation('descriptionLar', selectedLanguage.language as Language)}`
        }</S.XP>
      </S.ContainerXP>
      <S.ContainerXP position='flex-end'>
        <S.XP>{
        `Lead - Centro de Pesquisa, Desenvolvimento e Inovação Dell:
        ${getTranslation('descriptionLead', selectedLanguage.language as Language)}`
        }</S.XP>
      </S.ContainerXP>
      <S.ContainerXP position='flex-start'>
        <S.XP>{
          `Salutis: ${getTranslation('descriptionSalutis', selectedLanguage.language as Language)}`
        }</S.XP>
      </S.ContainerXP>
      <S.ContainerXP position='flex-end'>
        <S.XP>{
          `Kognit: ${getTranslation('descriptionKognit', selectedLanguage.language as Language)}`
        }</S.XP>
      </S.ContainerXP>
    </S.Container>
  );
};

export default Experience;
