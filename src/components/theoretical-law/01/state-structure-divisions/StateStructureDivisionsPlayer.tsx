import {StateStructureDivisions} from '@/animations/theoretical-law/01/state-structure-divisions/remotion/StateStructureDivisions';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/state-structure-divisions/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'structure-form', number: '01', title: '单一制与两大制度', ...SCENES.structureForm},
  {id: 'division-ladder', number: '02', title: '行政区划四级', ...SCENES.divisionLadder},
  {id: 'change-approval', number: '03', title: '变更批准与争议处理', ...SCENES.changeApproval},
];

export const StateStructureDivisionsPlayer = () => (
  <RemotionDeck
    animationId="state-structure-divisions"
    component={StateStructureDivisions}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="国家结构形式与行政区划"
  />
);

export default StateStructureDivisionsPlayer;
