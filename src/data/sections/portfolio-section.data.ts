import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  reactNative,
  awsamplify,
  python,
  flask,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Isko ni Juan',
      image: import('@/assets/portfolio/isko/logo.png'),
      dates: [new Date('2021-03'), null],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['FullStack Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Mobile App', 'Donation App'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/isko/Portfolio-1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/isko/Portfolio-2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/isko/Portfolio-3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/isko/Portfolio-4.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/isko/Portfolio-5.png'), alt: 'Fifth screenshot' },
      ],
      description:
        'Isko ni Juan is a platform that leverages the power of small-scale philanthropy and machine learning to finance college students. Our mission is to make higher education accessible to every deserving Filipino by empowering individuals to invest in the future of our nation.',
      tagsList: {
        title: 'Technologies',
        tags: [reactNative(), awsamplify(), python(), pnpm()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Poetry Generator',
      image: import('@/assets/portfolio/poetry/logo-1.png'),
      dates: [new Date('2020-09'), new Date('2021-02')],
      details: [
        { label: 'Team size', value: '5 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Machine Learning'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: '#', url: '#' },
        {
          label: 'Repository',
          value: 'https://github.com/DevRSC/poetry-generator',
          url: 'https://github.com/DevRSC/poetry-generator',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/poetry/Portfolio-1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/poetry/Portfolio-2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/poetry/Portfolio-3.png'), alt: 'Third screenshot' },
      ],
      description:
        'Our Shakespearean Poetry Generator is a one-of-a-kind platform that combines the timeless beauty of Shakespearean poetry with the power of machine learning. With just a few clicks, our generator can produce original sonnets and other poetic forms in the style of the great Bard himself. Whether youre a literature enthusiast or simply looking for a unique creative outlet, our platform offers a fun and engaging way to explore the world of Shakespearean poetry. So why wait? Start generating your own masterpieces today!',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), pnpm(), eslint(), prettier()],
      },
      links: [],
    },
    {
      name: 'Sixth Sense',
      image: import('@/assets/portfolio/sixth/logo-2.png'),
      dates: [new Date('2019-06'), new Date('2020-02')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['Front-end Developer', 'Back-end Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/sixth/Portfolio-1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/sixth/Portfolio-2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/sixth/Portfolio-3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/sixth/Portfolio-4.png'), alt: 'Fourth screenshot' },
      ],
      description:
        'Sixth Sense is a web application that uses an Xception Model to classify Brain Tumor in MRI. It also features Medical Management System specifically designed for neurologist that focuses on brain tumor. It aims to detect tumors in patients with brain tumors and bring prognostic value by assisting doctors and radiologists to speed up the process of diagnosing patients and accurately classifying them.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), postgreSql(), python()],
      },
      links: [],
    },

    // {
    //   name: 'Disco Ninjas',
    //   image: import('@/assets/portfolio/project-4.jpeg'),
    //   dates: [new Date('2016-05'), new Date('2018-07')],
    //   details: [
    //     { label: 'Team size', value: '11 people' },
    //     { label: 'My role', value: 'Front-end Developer' },
    //     { label: 'Company', value: 'Google' },
    //     { label: 'Category', value: ['Mobile app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
    //   ],
    //   description:
    //     'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [typescript(), jest(), firebase()],
    //   },
    //   links: [mockups({ url: '#' }), github({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
