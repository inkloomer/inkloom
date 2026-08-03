import {EvidenceClassification} from '@/animations/civil-procedure/10/evidence-classification/remotion/EvidenceClassification';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/evidence-classification/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'direct-indirect', number: '01', title: '直接证据 vs 间接证据', ...SCENES.directIndirect},
  {id: 'burden-evidence', number: '02', title: '本证 vs 反证三步判断', ...SCENES.burdenEvidence},
  {id: 'single-case-trap', number: '03', title: '不能单独定案的逆命题误区', ...SCENES.singleCaseTrap},
  {id: 'proof-threshold', number: '04', title: '本证要达标，反证无需登顶', ...SCENES.proofThreshold},
  {id: 'out-of-scope-evidence', number: '05', title: '无关事实不是本案证据', ...SCENES.outOfScopeEvidence},
];

export const EvidenceClassificationPlayer = () => <RemotionDeck animationId="evidence-classification" component={EvidenceClassification} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="证据的理论分类" />;

export default EvidenceClassificationPlayer;
