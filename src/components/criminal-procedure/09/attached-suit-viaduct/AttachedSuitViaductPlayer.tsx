import {
  AttachedSuitViaduct,
} from '@/animations/criminal-procedure/09/attached-suit-viaduct/remotion/AttachedSuitViaduct';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/09/attached-suit-viaduct/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'party-scope-berths',
    number: '01',
    title: '当事人泊位',
    ...SCENES['party-scope-berths'],
  },
  {
    id: 'material-loss-gate',
    number: '02',
    title: '物质损失闸门',
    ...SCENES['material-loss-gate'],
  },
  {
    id: 'preservation-fork',
    number: '03',
    title: '保全分岔',
    ...SCENES['preservation-fork'],
  },
];

export const AttachedSuitViaductPlayer = () => (
  <RemotionDeck
    animationId="attached-suit-viaduct"
    title="附带民事诉讼：当事人泊位、物质损失闸门与保全分岔"
    component={AttachedSuitViaduct}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default AttachedSuitViaductPlayer;
