import {RegionalEthnicAutonomy} from '@/animations/theoretical-law/01/regional-ethnic-autonomy/remotion/RegionalEthnicAutonomy';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/regional-ethnic-autonomy/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '制度内涵与自治地方', ...SCENES.concept},
  {id: 'organs', number: '02', title: '自治机关辨析', ...SCENES.organs},
  {id: 'mnemonics', number: '03', title: '口诀幡阵', ...SCENES.mnemonics},
];

export const RegionalEthnicAutonomyPlayer = () => (
  <RemotionDeck
    animationId="regional-ethnic-autonomy"
    component={RegionalEthnicAutonomy}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="民族区域自治制度"
  />
);

export default RegionalEthnicAutonomyPlayer;
