import {EvidenceReview} from '@/animations/civil-procedure/11/evidence-review/remotion/EvidenceReview';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/11/evidence-review/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'cross-examination-gate', number: '01', title: '证据先通过质证门', ...SCENES.crossExaminationGate},
  {id: 'illegal-evidence-sieve', number: '02', title: '非法证据排除规则', ...SCENES.illegalEvidenceSieve},
  {id: 'capacity-and-weight', number: '03', title: '证据能力与证明力', ...SCENES.capacityAndWeight},
  {id: 'corroboration-ring', number: '04', title: '五类证据需要补强', ...SCENES.corroborationRing},
];

export const EvidenceReviewPlayer = () => <RemotionDeck animationId="evidence-review" component={EvidenceReview} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="质证与证据认定" />;
export default EvidenceReviewPlayer;
