import menuWhite from './shared/images/menuWhite.png';
import menuBlack from './shared/images/menuBlack.png';
import linkedinWhite from './shared/images/linkedinWhite.png';
import linkedinBlack from './shared/images/linkedinBlack.png';
import githubWhite from './shared/images/githubWhite.png';
import githubBlack from './shared/images/githubBlack.png';
import gmailWhite from './shared/images/gmailWhite.png';
import gmailBlack from './shared/images/gmailBlack.png';
import whatsappWhite from './shared/images/whatsappWhite.png';
import whatsappBlack from './shared/images/whatsappBlack.png';

export interface Theme {
  themeName: string;
  backgroundHeader: string;
  background: string;
  title: string;
  borders: string;
  backgroundTitles: string;
  backgroundPopup: string;
  iconLinkedin: string;
  iconGithub: string;
  iconGmail: string;
  iconWhatsapp: string;
  iconMenu: string;
}

export const light = {
  themeName: 'light',
  backgroundHeader: '#0E8388',
  background: '#CBE4DE',
  title: '#2C3333',
  borders: '#0E8388',
  backgroundTitles: 'rgba(14, 131, 136, 0.38)',
  backgroundPopup: '#2C3333',
  iconLinkedin: linkedinBlack,
  iconGithub: githubBlack,
  iconGmail: gmailBlack,
  iconWhatsapp: whatsappBlack,
  iconMenu: menuWhite,
};

export const dark = {
  themeName: 'dark',
  backgroundHeader: '#0E8388',
  background: '#2C3333',
  title: '#CBE4DE',
  borders: '#0E8388',
  backgroundTitles: 'rgba(14, 131, 136, 0.38)',
  backgroundPopup: '#CBE4DE',
  iconLinkedin: linkedinWhite,
  iconGithub: githubWhite,
  iconGmail: gmailWhite,
  iconWhatsapp: whatsappWhite,
  iconMenu: menuBlack,
};
