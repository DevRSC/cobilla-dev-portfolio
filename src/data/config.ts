import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Ramil S. Cobilla Jr. - Entry React Developer',
    description:
      'I am a computer science student with a passion for software development. I have experience in using technologies such as ReactJS, React Native, HTML, CSS, C#, and MySQL, and have worked on freelance projects as a software developer. I am a proactive individual with strong technical and soft skills, and I am seeking internships to apply my skills and gain practical experience in the field. I am confident in my ability to deliver high-quality results and make a valuable contribution to any software development team.',
    faviconPath: '/src/assets/profile.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
