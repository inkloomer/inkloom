import {
  CaseFilingGatehouse,
} from '@/animations/criminal-procedure/11/case-filing-gatehouse/remotion/CaseFilingGatehouse';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/11/case-filing-gatehouse/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'report-windows-compare',
    number: '01',
    title: '三扇登记窗',
    ...SCENES['report-windows-compare'],
  },
  {
    id: 'filing-gate-conditions',
    number: '02',
    title: '立案闸门',
    ...SCENES['filing-gate-conditions'],
  },
  {
    id: 'supervision-fork-roads',
    number: '03',
    title: '救济岔路',
    ...SCENES['supervision-fork-roads'],
  },
];

export const CaseFilingGatehousePlayer = () => (
  <RemotionDeck
    animationId="case-filing-gatehouse"
    title="刑事立案：三扇登记窗、立案闸门与救济岔路"
    component={CaseFilingGatehouse}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CaseFilingGatehousePlayer;
