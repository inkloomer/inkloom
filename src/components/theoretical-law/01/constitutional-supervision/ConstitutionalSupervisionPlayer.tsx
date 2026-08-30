import {ConstitutionalSupervision} from '@/animations/theoretical-law/01/constitutional-supervision/remotion/ConstitutionalSupervision';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/constitutional-supervision/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'interpretation', number: '01', title: '三足鼎立：宪法解释与保障', ...SCENES.interpretation},
  {id: 'procedure', number: '02', title: '鼎腹铭文：审查流程', ...SCENES.procedure},
  {id: 'oath', number: '03', title: '鎏金誓版：宪法宣誓', ...SCENES.oath},
];

export const ConstitutionalSupervisionPlayer = () => (
  <RemotionDeck
    animationId="constitutional-supervision"
    component={ConstitutionalSupervision}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="宪法监督：青鼎监宪台"
  />
);

export default ConstitutionalSupervisionPlayer;
