import {QualityInspectionHall} from '@/animations/civil-law/12/quality-inspection-hall/remotion/QualityInspectionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/quality-inspection-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'fruit-ip-strip',
    number: '01',
    title: '孳息收取与知识产权',
    ...SCENES['fruit-ip-strip'],
  },
  {
    id: 'inspection-gate-series',
    number: '02',
    title: '品质瑕疵异议期间',
    ...SCENES['inspection-gate-series'],
  },
  {
    id: 'risk-direct-lanes',
    number: '03',
    title: '风险承担·直接易手',
    ...SCENES['risk-direct-lanes'],
  },
  {
    id: 'risk-indirect-ledger',
    number: '04',
    title: '风险承担·间接易手',
    ...SCENES['risk-indirect-ledger'],
  },
];

export const QualityInspectionHallPlayer = () => (
  <RemotionDeck
    animationId="quality-inspection-hall"
    title="买卖合同之二——石英检验馆"
    component={QualityInspectionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default QualityInspectionHallPlayer;
