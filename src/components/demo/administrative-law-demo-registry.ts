import {AdministrativePrinciplesCompass} from '../../animations/administrative-law/01/administrative-principles-compass/remotion/AdministrativePrinciplesCompass';
import {DURATION_FRAMES, FPS} from '../../animations/administrative-law/01/administrative-principles-compass/remotion/storyboard';
import {AdministrativeSubjectCommand} from '../../animations/administrative-law/02/administrative-subject-command/remotion/AdministrativeSubjectCommand';
import {DURATION_FRAMES as DURATION_FRAMES_02, FPS as FPS_02} from '../../animations/administrative-law/02/administrative-subject-command/remotion/storyboard';
import {CivilServantCareerFile} from '../../animations/administrative-law/03/civil-servant-career-file/remotion/CivilServantCareerFile';
import {DURATION_FRAMES as DURATION_FRAMES_03, FPS as FPS_03} from '../../animations/administrative-law/03/civil-servant-career-file/remotion/storyboard';
import type {DemoDefinition} from './demo-registry';

export const ADMINISTRATIVE_LAW_STYLE_DEMOS = [
  {
    id: 'administrative-law-01-administrative-principles-compass',
    slug: 'administrative-principles-compass',
    title: '行政审查手册',
    direction: 'Administrative Principles Field Manual',
    component: AdministrativePrinciplesCompass,
    href: '/inkloom/objective/administrative-law/01/administrative-principles-compass/',
    durationInFrames: DURATION_FRAMES,
    fps: FPS,
  },
  {
    id: 'administrative-law-02-administrative-subject-command',
    slug: 'administrative-subject-command',
    title: '机构指挥图',
    direction: 'Institutional Command Map',
    component: AdministrativeSubjectCommand,
    href: '/inkloom/objective/administrative-law/02/administrative-subject-command/',
    durationInFrames: DURATION_FRAMES_02,
    fps: FPS_02,
  },
  {
    id: 'administrative-law-03-civil-servant-career-file',
    slug: 'civil-servant-career-file',
    title: '人事档案流转图',
    direction: 'Career Record Office',
    component: CivilServantCareerFile,
    href: '/inkloom/objective/administrative-law/03/civil-servant-career-file/',
    durationInFrames: DURATION_FRAMES_03,
    fps: FPS_03,
  },
] as const satisfies readonly DemoDefinition[];

export const ADMINISTRATIVE_LAW_DEMO_ADDED_AT = {
  'administrative-law-01-administrative-principles-compass': '2026-08-13T12:00:00+08:00',
  'administrative-law-02-administrative-subject-command': '2026-08-13T13:00:00+08:00',
  'administrative-law-03-civil-servant-career-file': '2026-08-13T14:00:00+08:00',
} as const;
