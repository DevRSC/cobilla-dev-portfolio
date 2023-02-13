import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor of Science in Computer Science',
      institution: 'Technological University of the Philippines',
      image: import('@/assets/logos/tup-logo.png'),
      dates: [new Date('2019.09'), new Date('2023.09')],
      description:
        'College Degree. Specializing in algorithmic foundations, implementation and application of information and computing solutions.',
      links: [website({ url: 'http://www.tup.edu.ph/' })],
    },
    {
      title: 'ITMAWD - IT in Mobile Application and Web Development',
      institution: 'STI College Muñoz Edsa',
      image: import('@/assets/logos/sti-logo.png'),
      dates: [new Date('2013.07'), new Date('2019.07')],
      description: 'Senior High School degree. Specializing in Mobile and Web Development.',
      links: [website({ url: 'https://www.sti.edu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
