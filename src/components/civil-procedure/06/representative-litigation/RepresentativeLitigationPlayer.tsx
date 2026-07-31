import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {RepresentativeLitigation} from '@/animations/civil-procedure/06/representative-litigation/remotion/RepresentativeLitigation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/06/representative-litigation/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '什么是代表人诉讼？', ...SCENES.concept},
  {id: 'representative-authority', number: '02', title: '代表人的诉讼权限', ...SCENES.authority},
  {id: 'determined-members', number: '03', title: '人数确定的代表人诉讼', ...SCENES.determined},
  {id: 'undetermined-members', number: '04', title: '人数不确定的代表人诉讼', ...SCENES.undetermined},
  {id: 'securities-special', number: '05', title: '证券特别代表人诉讼', ...SCENES.securities},
  {id: 'comparison', number: '06', title: '代表人诉讼对比', ...SCENES.recap},
];

export const RepresentativeLitigationPlayer = () => (
  <RemotionDeck
    animationId="representative-litigation"
    title="代表人诉讼"
    component={RepresentativeLitigation}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RepresentativeLitigationPlayer;
