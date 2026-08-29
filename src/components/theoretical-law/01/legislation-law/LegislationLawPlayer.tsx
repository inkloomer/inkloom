import {LegislationLaw} from '@/animations/theoretical-law/01/legislation-law/remotion/LegislationLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legislation-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'principles-proposal', number: '01', title: '三原则与提案', ...SCENES.principlesProposal},
  {id: 'deliberation-voting', number: '02', title: '审议表决与通过', ...SCENES.deliberationVoting},
  {id: 'review-filing', number: '03', title: '审查关系与备案', ...SCENES.reviewFiling},
  {id: 'adjudication', number: '04', title: '立法裁决四路', ...SCENES.adjudication},
];

export const LegislationLawPlayer = () => (
  <RemotionDeck
    animationId="legislation-law"
    component={LegislationLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="立法法：程序、审查与裁决"
  />
);

export default LegislationLawPlayer;
