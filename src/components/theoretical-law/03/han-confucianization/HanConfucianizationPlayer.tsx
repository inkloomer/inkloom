import {HanConfucianization} from '@/animations/theoretical-law/03/han-confucianization/remotion/HanConfucianization';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/han-confucianization/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'petition-mercy', number: '01', title: '上请与恤刑', ...SCENES.petitionMercy},
  {id: 'conceal-spring', number: '02', title: '亲亲相隐与春秋决狱', ...SCENES.concealSpring},
  {id: 'autumn-winter', number: '03', title: '秋冬行刑', ...SCENES.autumnWinter},
];

export const HanConfucianizationPlayer = () => (
  <RemotionDeck
    animationId="han-confucianization"
    component={HanConfucianization}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="汉代法律儒家化"
  />
);

export default HanConfucianizationPlayer;
