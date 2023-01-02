/**
 * Projects
 */
import medium from '../assets/medium.png';
import memcaps from '../assets/memcaps.png';

/**
 * Workplaces
 */
import bombardier from '../assets/bombardier.jpeg';
import nep from '../assets/nep.png';
import nespresso from '../assets/nespresso.jpeg';
import newton from '../assets/newton.png';
import ubisoft from '../assets/ubisoft.png';

/**
 * Education
 */
import concordia from '../assets/concordia.png';
import dawson from '../assets/dawson.png';

/**
 * Social media
 */
import mediumMini from '../assets/medium-mini.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import instagram from '../assets/instagram.png';
import { formatDate } from './helper';

/**
 * Headings
 */
export const headings = [
  {
    name: 'aboutMe.title',
    id: 'aboutMe',
  },
  {
    name: 'projects.title',
    id: 'projects',
  },
  {
    name: 'workplaces.title',
    id: 'workplaces',
  },
  {
    name: 'education.title',
    id: 'education',
  },
];

/**
 * Projects
 */
export const projects = [
  {
    title: 'Memcaps',
    startDate: formatDate('01/09/2019'),
    endDate: undefined,
    desc: 'projects.memcaps.desc',
    link: 'https://www.dictionary.com/e/slang/under-construction/',
    img: memcaps,
    emoji: '📷',
  },
  {
    title: 'projects.medium.title',
    startDate: formatDate('01/09/2019'),
    endDate: undefined,
    desc: 'projects.medium.desc',
    link: 'https://medium.com/@laramo',
    img: medium,
    emoji: '📝',
  },
];

/**
 * Work places
 */
export const workplaces = [
  {
    title: 'Ubisoft',
    startDate: formatDate('03/01/2022'),
    endDate: undefined,
    desc: 'workplaces.ubisoft.desc',
    link: 'https://www.ubisoft.com/en-ca/',
    img: ubisoft,
    emoji: '🎮',
  },
  {
    title: 'Bombardier',
    startDate: formatDate('09/01/2020'),
    endDate: formatDate('02/28/2022'),
    desc: 'workplaces.bombardier.desc',
    link: 'https://bombardier.com/en',
    img: bombardier,
    emoji: '✈️',
  },
  {
    title: 'Neptronic',
    startDate: formatDate('06/01/2019'),
    endDate: formatDate('09/01/2020'),
    desc: 'workplaces.neptronic.desc',
    link: 'https://www.neptronic.com/',
    img: nep,
    emoji: '🏭',
  },
  {
    title: 'Nespresso',
    startDate: formatDate('06/01/2018'),
    endDate: formatDate('07/01/2019'),
    desc: 'workplaces.nespresso.desc',
    link: 'https://www.nespresso.com/ca/en/',
    img: nespresso,
    emoji: '☕',
  },
  {
    title: 'Newton',
    startDate: formatDate('04/30/2019'),
    endDate: formatDate('06/15/2019'),
    desc: 'workplaces.newton.desc',
    link: 'https://www.newton.co/',
    img: newton,
    emoji: '💸',
  },
];

/**
 * Education
 */
export const education = [
  {
    title: 'education.concordia',
    startDate: formatDate('09/01/2019'),
    endDate: undefined,
    desc: 'education.concordiaDesc',
    link: 'https://www.concordia.ca/',
    img: concordia,
    emoji: '🏫',
  },
  {
    title: 'education.dawson',
    startDate: formatDate('08/01/2016'),
    endDate: formatDate('09/01/2019'),
    desc: 'education.dawsonDesc',
    link: 'https://www.dawsoncollege.qc.ca/',
    img: dawson,
    emoji: '🎓',
  },
];

/**
 * Facts
 */
export const facts = ['aboutMe.fact1', 'aboutMe.fact2', 'aboutMe.fact3', 'aboutMe.fact4'];

/**
 * Specialties
 */
export const specialties = [
  'Javascript',
  'React.js',
  'React Native',
  'CSS/SASS',
  'TypeScript',
  'Git',
  'Linux',
  'Windows',
  'SQL',
  'HTML5',
  'Java',
  'C#',
];

/**
 * Social Media
 */
export const socialMedia = [
  {
    imgUrl: linkedin,
    siteUrl: 'https://www.linkedin.com/in/laramo/',
  },
  {
    imgUrl: gmail,
    siteUrl: 'mailto:laramo1999@gmail.com',
  },
  {
    imgUrl: facebook,
    siteUrl: 'https://www.facebook.com/mrslorenmo',
  },
  {
    imgUrl: instagram,
    siteUrl: 'https://www.instagram.com/super_woman_in_shorts/',
  },
  {
    imgUrl: mediumMini,
    siteUrl: 'https://medium.com/@laramo',
  },
];

/**
 * Theme list
 */
export const themeList = {
  LIGHT: 'light',
  DARK: 'dark',
  CHRISTMAS: 'christmas',
  EASTER: 'easter',
};
