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
import reactWhite from './shared/images/react_white.png';
import reactBlack from './shared/images/react_black.png';
import htmlWhite from './shared/images/html_white.png';
import htmlBlack from './shared/images/html_black.png';
import cssWhite from './shared/images/css_white.png';
import cssBlack from './shared/images/css_black.png';
import jsWhite from './shared/images/js_white.png';
import jsBlack from './shared/images/js_black.png';
import typeWhite from './shared/images/type_white.png';
import typeBlack from './shared/images/type_black.png';
import figmaWhite from './shared/images/figma_white.png';
import figmaBlack from './shared/images/figma_black.png';
import gitWhite from './shared/images/git_white.png';
import gitBlack from './shared/images/git_black.png';
import sqlWhite from './shared/images/sql_white.png';
import sqlBlack from './shared/images/sql_black.png';
import ifce from './shared/images/ifce.png';
import logoWhite from './shared/images/logo_white.png';
import logoBlack from './shared/images/logo_black.png';

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
  iconReact: string;
  iconHTML: string;
  iconCSS: string;
  iconJs: string;
  iconType: string;
  iconFigma: string;
  iconGit: string;
  iconSQL: string;
  iconIFCE: string;
  logo: string;
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
  iconReact: reactBlack,
  iconHTML: htmlBlack,
  iconCSS: cssBlack,
  iconJs: jsBlack,
  iconType: typeBlack,
  iconFigma: figmaBlack,
  iconGit: gitBlack,
  iconSQL: sqlBlack,
  iconIFCE: ifce,
  logo: logoWhite
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
  iconReact: reactWhite,
  iconHTML: htmlWhite,
  iconCSS: cssWhite,
  iconJs: jsWhite,
  iconType: typeWhite,
  iconFigma: figmaWhite,
  iconGit: gitWhite,
  iconSQL: sqlWhite,
  iconIFCE: ifce,
  logo: logoBlack
};

export const breakpoints = {
  mobile: '420px',
  tablet: '768px',
  desktop: '1024px',
  desktopLarge: '1440px',
  desktopWide: '1920px'
};
