import {GuaranteeAtriumBronzeware} from '@/animations/civil-law/13/guarantee-atrium-bronzeware/remotion/GuaranteeAtriumBronzeware';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/13/guarantee-atrium-bronzeware/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'guarantee-system-bench',
    number: '01',
    title: '担保权的体系与担保合同',
    ...SCENES['guarantee-system-bench'],
  },
  {
    id: 'counter-guarantee-invalidity',
    number: '02',
    title: '反担保与担保合同的无效',
    ...SCENES['counter-guarantee-invalidity'],
  },
  {
    id: 'subordinate-liability-changes',
    number: '03',
    title: '担保责任的从属性与主债变动',
    ...SCENES['subordinate-liability-changes'],
  },
  {
    id: 'joint-guarantee-hall',
    number: '04',
    title: '共同担保',
    ...SCENES['joint-guarantee-hall'],
  },
];

export const GuaranteeAtriumBronzewarePlayer = () => (
  <RemotionDeck
    animationId="guarantee-atrium-bronzeware"
    title="担保概述——青铜鼎廊"
    component={GuaranteeAtriumBronzeware}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default GuaranteeAtriumBronzewarePlayer;
