import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  eslint,
  postgreSql,
  prettier,
  react,
  supabase,
  tailwindCss,
  typescript,
  csharp,
  javascript,
  reactNative,
  MSSQL,
  python,
  awsamplify,
  nextJs,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 4,
          description: 'The first framework I learned. I have experience with React Hooks, Zustand, and React Router.',
        }),
        javascript({
          level: 4,
          description: 'I have experience with ES6+ syntax, DOM manipulation, and asynchronous programming.',
        }),
        reactNative({
          level: 4,
          description:
            'I have experience with React Native, Expo, and React Navigation. Currently working on a project with React Native and Expo.',
        }),
        csharp({
          level: 4,
          description:
            'I have experience with C# and .NET Core. I have developed a Inventory and POS system for a pet shop and a hardware store.',
        }),
        MSSQL({
          level: 3,
        }),

        tailwindCss({ level: 3 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
        }),

        postgreSql({ level: 2 }),
        python({ level: 2 }),
        awsamplify({ level: 2 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [astro(), supabase(), typescript(), nextJs()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:ph', name: 'Filipino - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
