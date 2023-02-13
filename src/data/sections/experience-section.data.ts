import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  csharp,
  dotnet,
  MSSQL,
  Bunifu,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Freelance Software Developer',
      company: 'ThermaCut Hardware Store',
      image: import('@/assets/logos/thermacut.png'),
      dates: [new Date('2021-04'), new Date('2021-06')],
      description: `
        - Developed front-end in C# Windows Form and back-end deployed in MSSQL
        - Worked closely with the client to gather requirements and design the software solution according to their specifications
        - Provided weekly updates and received feedback from the client to ensure satisfaction with the solution
        - Implemented and delivered a high-quality software solution that met project deadlines
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), dotnet(), MSSQL(), Bunifu()],
      },
      links: [facebook({ url: 'https://www.facebook.com/thermacuthardware' }), linkedin({ url: '#' })],
    },
    {
      role: 'Freelance Software Developer',
      company: 'Fur and Me Animal Clinic',
      image: import('@/assets/logos/furandme.jpg'),
      dates: [new Date('2020-03'), new Date('2021-03')],
      description: `
        - Developed a comprehensive software solution for a pet shop with inventory and POS system, including user management.
        - Utilized C# Windows Form to create a more complex software solutions
        - Implemented inventory system to manage and track the pet shop's products
        - Designed and developed a POS system with user management capabilities
        - Delivered a high-quality software solution that met project deadlines and improved the efficiency of the pet shop's operations.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), dotnet(), MSSQL(), Bunifu()],
      },
      links: [facebook({ url: 'https://www.facebook.com/furandme' }), linkedin({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
