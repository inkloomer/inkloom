import type {ComponentType} from 'react';
import {ThirdPartyRevocation} from '../../animations/civil-procedure/07/third-party-revocation/remotion/ThirdPartyRevocation';
import {ThirdPartyTypes} from '../../animations/civil-procedure/07/third-party-types/remotion/ThirdPartyTypes';
import {JointLitigation} from '../../animations/civil-procedure/06/joint-litigation/remotion/JointLitigation';
import {RepresentativeLitigation} from '../../animations/civil-procedure/06/representative-litigation/remotion/RepresentativeLitigation';
import {DelegatedAgent} from '../../animations/civil-procedure/08/delegated-agent/remotion/DelegatedAgent';
import {StatutoryAgent} from '../../animations/civil-procedure/08/statutory-agent/remotion/StatutoryAgent';
import {AdmissionCourtRecord} from '../../animations/civil-procedure/09/admission-court-record/remotion/AdmissionCourtRecord';
import {BurdenOfProofSteps} from '../../animations/civil-procedure/09/burden-of-proof-steps/remotion/BurdenOfProofSteps';
import {DURATION_FRAMES as DELEGATED_DURATION_FRAMES, FPS as DELEGATED_FPS} from '../../animations/civil-procedure/08/delegated-agent/remotion/storyboard';
import {DURATION_FRAMES as JOINT_DURATION_FRAMES, FPS as JOINT_FPS} from '../../animations/civil-procedure/06/joint-litigation/remotion/storyboard';
import {DURATION_FRAMES as REPRESENTATIVE_DURATION_FRAMES, FPS as REPRESENTATIVE_FPS} from '../../animations/civil-procedure/06/representative-litigation/remotion/storyboard';
import {DURATION_FRAMES as REVOCATION_DURATION_FRAMES, FPS as REVOCATION_FPS} from '../../animations/civil-procedure/07/third-party-revocation/remotion/storyboard';
import {DURATION_FRAMES as STATUTORY_DURATION_FRAMES, FPS as STATUTORY_FPS} from '../../animations/civil-procedure/08/statutory-agent/remotion/storyboard';
import {DURATION_FRAMES as ADMISSION_DURATION_FRAMES, FPS as ADMISSION_FPS} from '../../animations/civil-procedure/09/admission-court-record/remotion/storyboard';
import {DURATION_FRAMES as BURDEN_DURATION_FRAMES, FPS as BURDEN_FPS} from '../../animations/civil-procedure/09/burden-of-proof-steps/remotion/storyboard';
import {DURATION_FRAMES as TYPES_DURATION_FRAMES, FPS as TYPES_FPS} from '../../animations/civil-procedure/07/third-party-types/remotion/storyboard';

export interface DemoDefinition {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly direction: string;
  readonly component: ComponentType<Record<string, never>>;
  readonly href: string;
  readonly durationInFrames: number;
  readonly fps: number;
}

export const STYLE_DEMOS = [
  {id: 'civil-procedure-06-joint-litigation', slug: 'joint-litigation', title: '共同诉讼', direction: 'Case Bindery Workshop', component: JointLitigation, href: '/inkloom/objective/civil-procedure/06/joint-litigation/', durationInFrames: JOINT_DURATION_FRAMES, fps: JOINT_FPS},
  {id: 'civil-procedure-06-representative-litigation', slug: 'representative-litigation', title: '代表人诉讼', direction: 'Representative Signal Exchange', component: RepresentativeLitigation, href: '/inkloom/objective/civil-procedure/06/representative-litigation/', durationInFrames: REPRESENTATIVE_DURATION_FRAMES, fps: REPRESENTATIVE_FPS},
  {id: 'civil-procedure-07-third-party-types', slug: 'third-party-types', title: '关系定位图', direction: 'Legal Relation Map', component: ThirdPartyTypes, href: '/inkloom/objective/civil-procedure/07/third-party-types/', durationInFrames: TYPES_DURATION_FRAMES, fps: TYPES_FPS},
  {id: 'civil-procedure-07-third-party-revocation', slug: 'third-party-revocation', title: '套色印版', direction: 'Procedural Screenprint', component: ThirdPartyRevocation, href: '/inkloom/objective/civil-procedure/07/third-party-revocation/', durationInFrames: REVOCATION_DURATION_FRAMES, fps: REVOCATION_FPS},
  {id: 'civil-procedure-08-statutory-agent', slug: 'statutory-agent', title: '法定代理人', direction: 'Guardian Identity Ledger', component: StatutoryAgent, href: '/inkloom/objective/civil-procedure/08/statutory-agent/', durationInFrames: STATUTORY_DURATION_FRAMES, fps: STATUTORY_FPS},
  {id: 'civil-procedure-08-delegated-agent', slug: 'delegated-agent', title: '委托代理人', direction: 'Power-of-Attorney Contract', component: DelegatedAgent, href: '/inkloom/objective/civil-procedure/08/delegated-agent/', durationInFrames: DELEGATED_DURATION_FRAMES, fps: DELEGATED_FPS},
  {id: 'civil-procedure-09-admission-court-record', slug: 'admission-court-record', title: '法庭声纹图', direction: 'Court Signal Waveform', component: AdmissionCourtRecord, href: '/inkloom/objective/civil-procedure/09/admission-court-record/', durationInFrames: ADMISSION_DURATION_FRAMES, fps: ADMISSION_FPS},
  {id: 'civil-procedure-09-burden-of-proof-steps', slug: 'burden-of-proof-steps', title: '构成举证场', direction: 'Constructivist Proof Field', component: BurdenOfProofSteps, href: '/inkloom/objective/civil-procedure/09/burden-of-proof-steps/', durationInFrames: BURDEN_DURATION_FRAMES, fps: BURDEN_FPS},
] as const satisfies readonly DemoDefinition[];

export const demoById = (id: string) => STYLE_DEMOS.find((demo) => demo.id === id);
