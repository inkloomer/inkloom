import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {CrossBorderDisputes} from '@/animations/international-law/09/cross-border-disputes/remotion/CrossBorderDisputes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/09/cross-border-disputes/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'arbitration-agreement', number: '01', title: '涉外仲裁协议的效力', ...SCENES.arbitrationAgreement},
  {id: 'jurisdiction-levels', number: '02', title: '级别管辖', ...SCENES.jurisdictionLevels},
  {id: 'territorial-basics', number: '03', title: '地域管辖：沾边就管', ...SCENES.territorialBasics},
  {id: 'forum-mechanics', number: '04', title: '不方便法院与平行诉讼', ...SCENES.forumMechanics},
  {id: 'foreign-status', number: '05', title: '外国人的诉讼地位', ...SCENES.foreignStatus},
];

export const CrossBorderDisputesPlayer = () => (
  <RemotionDeck
    animationId="cross-border-disputes"
    title="国际民商事争议的解决"
    component={CrossBorderDisputes}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CrossBorderDisputesPlayer;
