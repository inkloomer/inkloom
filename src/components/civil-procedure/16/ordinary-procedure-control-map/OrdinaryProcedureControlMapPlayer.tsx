import {typography} from '@/animations/civil-procedure/16/ordinary-procedure-control-map/animation.meta';
import {OrdinaryProcedureControlMap} from '@/animations/civil-procedure/16/ordinary-procedure-control-map/remotion/OrdinaryProcedureControlMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/16/ordinary-procedure-control-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'filing-gate', number: '01', title: '起诉门槛与三条程序出口', ...SCENES.filingGate},
  {id: 'three-documents', number: '02', title: '三份文书的程序与实体出口', ...SCENES.threeDocuments},
  {id: 'repeat-suit-test', number: '03', title: '重复起诉的合流检验', ...SCENES.repeatSuitTest},
  {id: 'withdrawal-absence', number: '04', title: '撤诉与缺席判决的角色边界', ...SCENES.withdrawalAbsence},
  {id: 'procedural-obstacles', number: '05', title: '三类诉讼障碍的边界', ...SCENES.proceduralObstacles},
  {id: 'judgment-documents', number: '06', title: '裁判文书与纠错出口', ...SCENES.judgmentDocuments},
  {id: 'judgment-effects', number: '07', title: '判决效力的条件与范围', ...SCENES.judgmentEffects},
  {id: 'marriage-validity-boundary', number: '08', title: '婚姻效力诉讼的特殊边界', ...SCENES.marriageValidityBoundary},
];

export default () => (
  <RemotionDeck
    animationId="ordinary-procedure-control-map"
    component={OrdinaryProcedureControlMap}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="一审普通程序：程序出口与判决效力"
    typography={typography}
    typographyScope={{animationId: 'ordinary-procedure-control-map', subject: 'civil-procedure', topic: '16'}}
  />
);
