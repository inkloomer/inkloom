import {ConductOmissionGates} from '@/animations/criminal/05/conduct-omission-gates/remotion/ConductOmissionGates';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/05/conduct-omission-gates/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'act-features-tri-test', number: '01', title: '危害行为·三特征与判别', ...SCENES.actFeaturesTriTest},
  {id: 'victim-self-risk-fork', number: '02', title: '被害人自陷风险·谁支配谁负责', ...SCENES.victimSelfRiskFork},
  {id: 'omission-family-map', number: '03', title: '作为与不作为·分类判定', ...SCENES.omissionFamilyMap},
  {id: 'duty-stream-sources', number: '04', title: '作为义务·应为（二分说）', ...SCENES.dutyStreamSources},
  {id: 'ability-error-gate', number: '05', title: '能为·不为·主观与等价性', ...SCENES.abilityErrorGate},
];

export const ConductOmissionGatesPlayer = () => <RemotionDeck animationId="conduct-omission-gates" component={ConductOmissionGates} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="行为：危害行为·自陷风险·不作为犯" />;
export default ConductOmissionGatesPlayer;
