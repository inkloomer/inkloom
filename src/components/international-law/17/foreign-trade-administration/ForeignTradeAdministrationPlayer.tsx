import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {ForeignTradeAdministration} from '@/animations/international-law/17/foreign-trade-administration/remotion/ForeignTradeAdministration';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/17/foreign-trade-administration/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'foreign-trade-law', number: '01', title: '对外贸易法', ...SCENES.foreignTradeLaw},
  {id: 'export-control', number: '02', title: '出口管制法', ...SCENES.exportControl},
  {id: 'dumping-conditions', number: '03', title: '反倾销条件', ...SCENES.dumpingConditions},
  {id: 'remedy-procedure', number: '04', title: '两反一保程序', ...SCENES.remedyProcedure},
  {id: 'subsidy-safeguard', number: '05', title: '反补贴与保障措施', ...SCENES.subsidySafeguard},
  {id: 'remedy-comparison', number: '06', title: '七维对比', ...SCENES.remedyComparison},
];

export const ForeignTradeAdministrationPlayer = () => (
  <RemotionDeck
    animationId="foreign-trade-administration"
    title="对外贸易管理法"
    component={ForeignTradeAdministration}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ForeignTradeAdministrationPlayer;
