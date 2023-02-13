import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/profile.jpg'),
  fullName: 'Ramil S. Cobilla Jr.',
  role: 'Entry Level React Native Developer',
  details: [
    { label: 'Phone', value: '+63 966 271 2988' },
    { label: 'Email', value: 'ramil.cobilla@gmail.com' },
    { label: 'From', value: 'Quezon City, Philippines' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+63 966 271 2988' },
    { label: 'Email', value: 'ramil.cobilla@gmail.com' },
    { label: 'LinkedIn', value: '/in/ramil-cobilla-jr', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/DevRSC', url: 'https://github.com' },
    { label: 'Website', value: '#', url: '/', fullRow: true },
  ],
  description:
    'As a computer science student with a passion for software development, I am seeking internships to apply my skills and gain practical experience in the field. I have a strong understanding of custom software development and experience using technologies such as ReactJS, React Native, HTML, CSS, C#, and MySQL. I have also worked on freelance projects as a software developer, where I developed custom software solutions for a hardware store and a pet shop. My education background includes a Bachelor of Science in Computer Science and a Senior High School Diploma in IT in Mobile App and Web Development. I am a proactive individual with strong technical and soft skills, including collaborative leadership, conflict resolution, and project management.',
  tags: [{ name: 'Open for Internship' }, { name: 'Looking for oppurtunities' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ramil_Cobilla.pdf',
  },
  links: [
    facebook({ url: 'https://www.facebook.com/Ramil.SC/' }),
    github({ url: 'https://github.com/DevRSC' }),
    linkedin({ url: 'https://www.linkedin.com/in/ramil-cobilla-jr-845a92212/' }),
    twitter({ url: 'https://twitter.com/ramil_cobilla' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
