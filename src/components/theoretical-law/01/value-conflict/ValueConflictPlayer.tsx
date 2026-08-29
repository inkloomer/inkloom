import {ValueConflict} from '@/animations/theoretical-law/01/value-conflict/remotion/ValueConflict';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/value-conflict/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'conflict-arenas', number: '01', title: '冲突的三种场合', ...SCENES.conflictArenas},
  {id: 'rank-principle', number: '02', title: '价值位阶：保高舍低', ...SCENES.rankPrinciple},
  {id: 'proportion-principle', number: '03', title: '比例原则：伤到最小', ...SCENES.proportionPrinciple},
  {id: 'value-field-limits', number: '04', title: '开放的价值星空', ...SCENES.valueFieldLimits},
];

export const ValueConflictPlayer = () => (
  <RemotionDeck
    animationId="value-conflict"
    component={ValueConflict}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律的价值冲突：三种场合与两把钥匙"
  />
);

export default ValueConflictPlayer;
