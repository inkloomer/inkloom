import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {RepresentativeLitigation} from '@/animations/civil-procedure/06/representative-litigation/remotion/RepresentativeLitigation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/06/representative-litigation/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '什么是代表人诉讼？', ...SCENES.concept},
  {number: '02', title: '代表人的诉讼权限', ...SCENES.authority},
  {number: '03', title: '人数确定的代表人诉讼', ...SCENES.determined},
  {number: '04', title: '人数不确定的代表人诉讼', ...SCENES.undetermined},
  {number: '05', title: '证券特别代表人诉讼', ...SCENES.securities},
  {number: '06', title: '代表人诉讼对比', ...SCENES.recap},
];

export const RepresentativeLitigationPlayer = () => (
  <RemotionDeck
    title="代表人诉讼"
    component={RepresentativeLitigation}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RepresentativeLitigationPlayer;
