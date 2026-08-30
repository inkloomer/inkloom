import {GrassrootsAutonomy} from '@/animations/theoretical-law/01/grassroots-autonomy/remotion/GrassrootsAutonomy';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/grassroots-autonomy/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'features', number: '01', title: '三性根基：群众性·自治性·基层性', ...SCENES.features},
  {id: 'assemblies', number: '02', title: '四会对照：村民会·村代会·居民会·居代会', ...SCENES.assemblies},
  {id: 'committees', number: '03', title: '村委会 VS 居委会', ...SCENES.committees},
];

export const GrassrootsAutonomyPlayer = () => (
  <RemotionDeck
    animationId="grassroots-autonomy"
    component={GrassrootsAutonomy}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="基层群众自治"
  />
);

export default GrassrootsAutonomyPlayer;
