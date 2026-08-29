import {
  PleaLeniencyCaliper,
} from '@/animations/criminal-procedure/02/plea-leniency-caliper/remotion/PleaLeniencyCaliper';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/02/plea-leniency-caliper/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'stage-scope-tape',
    number: '01',
    title: '全程卷尺',
    ...SCENES['stage-scope-tape'],
  },
  {
    id: 'triple-bench-boundaries',
    number: '02',
    title: '三台边界',
    ...SCENES['triple-bench-boundaries'],
  },
  {
    id: 'deed-signing-desk',
    number: '03',
    title: '具结书签署',
    ...SCENES['deed-signing-desk'],
  },
];

export const PleaLeniencyCaliperPlayer = () => (
  <RemotionDeck
    animationId="plea-leniency-caliper"
    title="认罪认罚从宽：全程卷尺、三台边界与具结书签署"
    component={PleaLeniencyCaliper}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PleaLeniencyCaliperPlayer;
