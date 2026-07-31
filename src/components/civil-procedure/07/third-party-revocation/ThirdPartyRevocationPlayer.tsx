import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
import {ThirdPartyRevocation} from '@/animations/civil-procedure/07/third-party-revocation/remotion/ThirdPartyRevocation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/07/third-party-revocation/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '概念', ...SCENES.concept},
  {id: 'conditions', number: '02', title: '条件', ...SCENES.conditions},
  {id: 'procedure', number: '03', title: '程序', ...SCENES.procedure},
  {id: 'classification', number: '04', title: '结果', ...SCENES.classification},
];

export const ThirdPartyRevocationPlayer = () => (
  <RemotionDeck
    animationId="third-party-revocation"
    component={ThirdPartyRevocation}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="第三人撤销之诉"
  />
);

export default ThirdPartyRevocationPlayer;
