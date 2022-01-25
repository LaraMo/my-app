//projects
import medium from "./assets/medium.png";
import memcaps from "./assets/memcaps.png";
//workplaces
import bombardier from "./assets/bombardier.jpeg";
import nep from "./assets/nep.png";
import nespresso from "./assets/nespresso.jpeg";
import newton from "./assets/newton.png";

//schools
import concordia from "./assets/concordia.png";
import dawson from "./assets/dawson.png";
import moment from "moment";
import { colors } from "./styles/colors";

//social media
import discord from "./assets/discord.png";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import gmail from "./assets/gmail.png";
import instagram from "./assets/instagram.png";

export const headings = [
  {
    name: "About Me",
    id: "aboutMe",
    color: { dark: colors.primaryDark, light: colors.primary },
  },
  {
    name: "Projects",
    id: "projects",
    color: { dark: colors.secondaryDark, light: colors.secondary },
  },
  {
    name: "Work",
    id: "workplaces",
    color: { dark: colors.tertiaryDark, light: colors.tertiary },
  },
  {
    name: "Education",
    id: "education",
    color: { dark: colors.quaternaryDark, light: colors.quaternary },
  },
];
export const projects = [
  {
    title: "Medium Writer",
    startDate: moment("01/12/2021").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "Write articles about various JS topics",
    link: "https://medium.com/@laramo",
    img: medium,
    emoji: "📝",
  },
  {
    title: "Memcaps",
    startDate: moment("01/12/2021").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "Sharable gallery app",
    link: "https://medium.com/@laramo",
    img: memcaps,
    emoji: "📷",
  },
];

export const workplaces = [
  {
    title: "Bombardier",
    startDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "Working on ReactNative mobile application, shared component library and sales website using React",
    link: "https://bombardier.com/en",
    img: bombardier,
    emoji: "✈️",
  },
  {
    title: "Neptronic",
    startDate: moment("01/05/2019").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    desc: "Working on internal software using C# and React",
    link: "https://www.neptronic.com/",
    img: nep,
    emoji: "🏭",
  },
  {
    title: "Nespresso",
    startDate: moment("01/05/2019").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    desc: "Sales representetive showcasing coffee machines",
    link: "https://www.nespresso.com/ca/en/",
    img: nespresso,
    emoji: "☕",
  },
  {
    title: "Newton",
    startDate: moment("01/05/2019").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2020").format("MMM/DD/YYYY"),
    desc: "Work on website using React.js",
    link: "https://www.newton.co/",
    img: newton,
    emoji: "💸",
  },
];

export const schools = [
  {
    title: "Concordia University",
    startDate: moment("01/08/2019").format("MMM/DD/YYYY"),
    endDate: undefined,
    desc: "Bachlor's of Computer Science",
    link: "https://www.concordia.ca/",
    img: concordia,
  },
  {
    title: "Dawson College",
    startDate: moment("01/08/2016").format("MMM/DD/YYYY"),
    endDate: moment("01/09/2019").format("MMM/DD/YYYY"),
    desc: "DEC of computer science",
    link: "https://www.dawsoncollege.qc.ca/",
    img: dawson,
  },
];

export const facts = [
  "I love coffee so much",
  "I speak English, French, Russian and Hebrew",
  "I am part of the 1-2% of the unique population; redheads. ",
  "I am not Irish.",
];

export const specialties = [
  "Javascript",
  "React.js",
  "React Native",
  "CSS/SASS",
  ,
  "TypeScript",
  "Git",
  "Linux",
  "Windows",
  ,
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
