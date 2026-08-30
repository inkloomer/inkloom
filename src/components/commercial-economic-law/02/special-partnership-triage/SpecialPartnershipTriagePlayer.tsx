import {SpecialPartnershipTriage} from '@/animations/commercial-economic-law/02/special-partnership-triage/remotion/SpecialPartnershipTriage';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/special-partnership-triage/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'triage-board', number: '01', title: '分诊台：先看债务，再找人', ...SCENES.triageBoard},
  {id: 'verdict-ward', number: '02', title: '本案分诊结果：四方定责', ...SCENES.verdictWard},
  {id: 'tenure-timeline', number: '03', title: '离院不免责：退伙时间线与责任矩阵', ...SCENES.tenureTimeline},
];

export const SpecialPartnershipTriagePlayer = () => <RemotionDeck animationId="special-partnership-triage" component={SpecialPartnershipTriage} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="特殊的普通合伙：先分诊债务，再点医生的名" />;
export default SpecialPartnershipTriagePlayer;
