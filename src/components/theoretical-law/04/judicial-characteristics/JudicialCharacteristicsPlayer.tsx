import {JudicialCharacteristics} from '@/animations/theoretical-law/04/judicial-characteristics/remotion/JudicialCharacteristics';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judicial-characteristics/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'six-features', number: '01', title: '六印司法墙：特征方阵', ...SCENES.sixFeatures},
  {id: 'independence', number: '02', title: '单室三辨：独立性', ...SCENES.independence},
];

export const JudicialCharacteristicsPlayer = () => (
  <RemotionDeck
    animationId="judicial-characteristics"
    component={JudicialCharacteristics}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="我国的司法特征：六印司法墙"
  />
);

export default JudicialCharacteristicsPlayer;
