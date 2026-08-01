import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
import {ThirdPartyTypes} from '@/animations/civil-procedure/07/third-party-types/remotion/ThirdPartyTypes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/07/third-party-types/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'definition', number: '01', title: '概念', ...SCENES.definition},
  {id: 'comparison', number: '02', title: '对比', ...SCENES.comparison},
  {id: 'rights', number: '03', title: '权利', ...SCENES.rights},
  {id: 'distinction', number: '04', title: '区分', ...SCENES.distinction},
  {id: 'no-independent-claim', number: '05', title: '无独立请求权第三人', ...SCENES.noIndependentClaim},
];

export const ThirdPartyTypesPlayer = () => (
  <RemotionDeck
    animationId="third-party-types"
    component={ThirdPartyTypes}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="第三人类型与诉讼权利"
  />
);

export default ThirdPartyTypesPlayer;
