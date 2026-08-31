import {SuccessionLineageRegister} from '@/animations/civil-law/21/succession-lineage-register/remotion/SuccessionLineageRegister';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/21/succession-lineage-register/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'heir-sequence-lanes',
    number: '01',
    title: '继承权与继承人顺序',
    ...SCENES['heir-sequence-lanes'],
  },
  {
    id: 'forfeiture-renunciation-split',
    number: '02',
    title: '丧失继承权与放弃继承权',
    ...SCENES['forfeiture-renunciation-split'],
  },
  {
    id: 'representation-transfer-chain',
    number: '03',
    title: '代位继承与转继承',
    ...SCENES['representation-transfer-chain'],
  },
  {
    id: 'will-forms-validity-gate',
    number: '04',
    title: '遗嘱的形式与效力',
    ...SCENES['will-forms-validity-gate'],
  },
  {
    id: 'legacy-agreement-priority',
    number: '05',
    title: '遗赠与遗赠扶养协议',
    ...SCENES['legacy-agreement-priority'],
  },
  {
    id: 'estate-settlement-lane',
    number: '06',
    title: '遗产的处理',
    ...SCENES['estate-settlement-lane'],
  },
];

export const SuccessionLineageRegisterPlayer = () => (
  <RemotionDeck
    animationId="succession-lineage-register"
    title="继承法——世系谱牒房"
    component={SuccessionLineageRegister}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SuccessionLineageRegisterPlayer;
