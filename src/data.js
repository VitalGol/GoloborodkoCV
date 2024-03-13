import {
  FaRegEnvelope,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaFileDownload,
  FaQrcode,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGulp,
  FaTelegram,
} from 'react-icons/fa';
import { SiWebpack } from 'react-icons/si';
import { RiSupabaseLine } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb';
import { BsFiletypeScss } from 'react-icons/bs';
import { SiMongodb } from 'react-icons/si';
import apr2020 from './assets/apr2020.jpg';
import may2020 from './assets/may2020.jpg';
import mar2021 from './assets/mar2021.jpg';
import aug2022 from './assets/aug2022.jpg';

// const lableSupabase = { icon: RiSupabaseLine };

export const skills = [
  {
    id: 0,
    icon: FaReact,
    title: 'Experience with the',
    text: 'React library in writing single page applications using React Router, hooks.',
  },
  {
    id: 1,
    icon: TbBrandVite,
    title: 'Experience with',
    text: 'Vite for create React App.',
  },
  {
    id: 2,
    icon: FaReact,
    title: 'Experience with State Management in',
    text: 'React Using Redux Toolkit and Zustand.',
  },
  {
    id: 3,
    icon: TbBrandNextjs,
    title: 'Experience with framework',
    text: 'Next JS for create web applications with server-side rendering.',
  },
  {
    id: 4,
    icon: null,
    title:
      'Experience with React libraries that allow you to import and use components for the user interface in applications — Material UI, Tailwind CSS, Bootstrap',
    text: '.',
  },
  {
    id: 5,
    icon: null,
    title: 'Proficiency in JavaScript and TypeScript',
    text: '.',
  },
  {
    id: 6,
    icon: SiMongodb,
    title: 'Experience with database program the',
    text: 'MongoDB.',
  },
  {
    id: 7,
    icon: RiSupabaseLine,
    title: 'Learning and practicing',
    text: 'Supabase.',
  },
  {
    id: 8,
    icon: FaNodeJs,
    title: 'Experience with',
    text: 'Node.js Express server for building web applications.',
  },
  {
    id: 9,
    icon: null,
    title: 'Experience with REST API / HTTP methods',
    text: '.',
  },
  {
    id: 10,
    icon: FaFigma,
    title:
      'Experience with online service for interface development and prototyping',
    text: 'Figma.',
  },
  {
    id: 11,
    icon: null,
    title: 'Experience building web applications with responsive design',
    text: '.',
  },
  {
    id: 12,
    icon: BsFiletypeScss,
    title: 'Using the',
    text: 'SCSS CSS preprocessor to write styles quickly.',
  },
  {
    id: 13,
    icon: FaGulp,
    title: 'Experience with the task manager',
    text: 'Gulp 4.',
  },
  {
    id: 14,
    icon: SiWebpack,
    title: 'Experience with the module builders',
    text: 'Webpack 5.',
  },
  {
    id: 15,
    icon: FaGitAlt,
    title: 'Experience with',
    text: ' Git.',
  },
];

export const address = [
  {
    id: 1,
    icon: FaPhoneSquareAlt,
    title: '+38 (068) 056 48 80',
    tooltip: 'call to me',
  },
  {
    id: 2,
    icon: FaRegEnvelope,
    title: 'vital.goloborodko@gmail.com',
    tooltip: 'write to me',
  },
  {
    id: 3,
    icon: FaTelegram,
    title: '@VitalyGol',
    tooltip: 'write to me',
  },
  {
    id: 4,
    icon: FaLinkedin,
    title: 'Linkedin',
    tooltip: 'click to open Linkedin in a new tab',
  },
  // {
  //   id: 5,
  //   icon: FaFileDownload,
  //   title: "download CV's file",
  //   tooltip: 'download my CV',
  // },
  {
    id: 6,
    icon: FaQrcode,
    title: 'show QR code',
    tooltip: 'click to scan QR code during 10sec',
  },
];

export const courses = [
  {
    id: 1,
    pic: apr2020,
    title: 'April, 2020. SOLVVE.',
    content: 'Course "React Native"',
  },
  {
    id: 2,
    pic: may2020,
    title: 'May, 2020. Udemy.',
    content: 'Course "The Complete Full-Stack JavaScript Course!"',
  },
  {
    id: 3,
    pic: mar2021,
    title: 'March, 2021. SoloLearn.',
    content: 'Course "React + Redux"',
  },
  {
    id: 4,
    pic: aug2022,
    title: 'August, 2022. Udemy.',
    content:
      'Course "Become A Full Stack Web Developer - Beginner To Advanced"',
  },
];
