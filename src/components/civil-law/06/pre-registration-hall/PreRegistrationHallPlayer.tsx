import {PreRegistrationHall} from '@/animations/civil-law/06/pre-registration-hall/remotion/PreRegistrationHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/06/pre-registration-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'non-contract-shifts',
    number: '01',
    title: '非基于合同引起的物权变动',
    ...SCENES['non-contract-shifts'],
  },
  {
    id: 'document-forks',
    number: '02',
    title: '能变动物权与不能变动物权的法律文书',
    ...SCENES['document-forks'],
  },
  {
    id: 'notice-registration',
    number: '03',
    title: '买卖预告登记',
    ...SCENES['notice-registration'],
  },
  {
    id: 'objection-registration',
    number: '04',
    title: '异议登记',
    ...SCENES['objection-registration'],
  },
];

export const PreRegistrationHallPlayer = () => (
  <RemotionDeck
    animationId="pre-registration-hall"
    title="非基于合同的物权变动与预告异议登记——绛红卷宗馆"
    component={PreRegistrationHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PreRegistrationHallPlayer;
