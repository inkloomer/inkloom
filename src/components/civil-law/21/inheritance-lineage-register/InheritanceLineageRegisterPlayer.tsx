import {InheritanceLineageRegister} from '@/animations/civil-law/21/inheritance-lineage-register/remotion/InheritanceLineageRegister';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/21/inheritance-lineage-register/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'heir-order-kinship',
    number: '01',
    title: '继承权、继承人顺序与养继效果',
    ...SCENES['heir-order-kinship'],
  },
  {
    id: 'loss-waiver-rights',
    number: '02',
    title: '丧失继承权、受遗赠权与放弃继承权',
    ...SCENES['loss-waiver-rights'],
  },
  {
    id: 'representation-transmission',
    number: '03',
    title: '代位继承与转继承',
    ...SCENES['representation-transmission'],
  },
  {
    id: 'will-forms-validity',
    number: '04',
    title: '遗嘱的形式与效力',
    ...SCENES['will-forms-validity'],
  },
  {
    id: 'bequest-agreement-debts',
    number: '05',
    title: '遗嘱继承、遗赠与遗赠扶养协议',
    ...SCENES['bequest-agreement-debts'],
  },
];

export const InheritanceLineageRegisterPlayer = () => (
  <RemotionDeck
    animationId="inheritance-lineage-register"
    title="继承法——世系墨谱"
    component={InheritanceLineageRegister}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default InheritanceLineageRegisterPlayer;
