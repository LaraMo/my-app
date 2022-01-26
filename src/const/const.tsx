//projects
import medium from "../assets/medium.png";
import memcaps from "../assets/memcaps.png";
//workplaces
import bombardier from "../assets/bombardier.jpeg";
import nep from "../assets/nep.png";
import nespresso from "../assets/nespresso.jpeg";
import newton from "../assets/newton.png";

//schools
import concordia from "../assets/concordia.png";
import dawson from "../assets/dawson.png";
import moment from "moment";
import { colors } from "../styles/colors";

//social media
import discord from "../assets/discord.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";

export const headings = [
  {
    name: "aboutMe.title",
    id: "aboutMe",
    color: { dark: colors.darkPrimary, light: colors.primary },
  },
  {
    name: "projects.title",
    id: "projects",
    color: { dark: colors.darkSecondary, light: colors.secondary },
  },
  {
    name: "workplaces.title",
    id: "workplaces",
    color: { dark: colors.darkTertiary, light: colors.tertiary },
  },
  {
    name: "education.title",
    id: "education",
    color: { dark: colors.darkQuaternary, light: colors.quaternary },
  },
];
export const projects = [
  {
    title: "Memcaps",
    startDate: moment("01/12/2021").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "projects.memcaps.desc",
    link: "https://www.dictionary.com/e/slang/under-construction/",
    img: memcaps,
    emoji: "📷",
  },
  {
    title: "projects.medium.title",
    startDate: moment("01/12/2021").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "projects.medium.desc",
    link: "https://medium.com/@laramo",
    img: medium,
    emoji: "📝",
  },
];

export const workplaces = [
  {
    title: "Bombardier",
    startDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "workplaces.bombardier.desc",
    link: "https://bombardier.com/en",
    img: bombardier,
    emoji: "✈️",
  },
  {
    title: "Neptronic",
    startDate: moment("01/05/2019").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    desc: "workplaces.neptronic.desc",
    link: "https://www.neptronic.com/",
    img: nep,
    emoji: "🏭",
  },
  {
    title: "Nespresso",
    startDate: moment("01/05/2019").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    desc: "workplaces.nespresso.desc",
    link: "https://www.nespresso.com/ca/en/",
    img: nespresso,
    emoji: "☕",
  },
  {
    title: "Newton",
    startDate: moment("01/05/2019").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    desc: "workplaces.newton.desc",
    link: "https://www.newton.co/",
    img: newton,
    emoji: "💸",
  },
];

export const education = [
  {
    title: "education.concordia",
    startDate: moment("01/08/2019").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "education.concordiaDesc",
    link: "https://www.concordia.ca/",
    img: concordia,
    emoji: "🏫"

  },
  {
    title: "education.dawson",
    startDate: moment("01/08/2016").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2019").format("MMM/DD/YYYY"),
    desc: "education.dawsonDesc",
    link: "https://www.dawsoncollege.qc.ca/",
    img: dawson,
    emoji: "🎓"
  },
];

export const facts = [
  "aboutMe.fact1",
  "aboutMe.fact2",
  "aboutMe.fact3",
  "aboutMe.fact4",
];

export const specialties = [
  "Javascript",
  "React.js",
  "React Native",
  "CSS/SASS",
  "TypeScript",
  "Git",
  "Linux",
  "Windows",
  "SQL",
  "HTML5",
  "Java",
  "C#",
];

export const socialMedia = [
  {
    imgUrl: linkedin,
    siteUrl: "https://www.linkedin.com/in/laramo/",
  },
  {
    imgUrl: gmail,
    siteUrl: "mailto:laramo1999@gmail.com",
  },
  {
    imgUrl: facebook,
    siteUrl: "https://www.facebook.com/mrslorenmo",
  },
  {
    imgUrl: instagram,
    siteUrl: "https://www.instagram.com/super_woman_in_shorts/",
  },
  {
    imgUrl: discord,
    siteUrl: "https://discord.com/invite/MechHerev#5129",
  },
];
