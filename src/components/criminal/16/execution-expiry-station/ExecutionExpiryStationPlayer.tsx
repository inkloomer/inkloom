import {ExecutionExpiryStation} from '@/animations/criminal/16/execution-expiry-station/remotion/ExecutionExpiryStation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/16/execution-expiry-station/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'commutation-grade-ruler', number: '01', title: '减刑·锯圈留底线', ...SCENES.commutationGradeRuler},
  {id: 'parole-gate-quads', number: '02', title: '假释·闸口与禁区', ...SCENES.paroleGateQuads},
  {id: 'parole-probation-compare', number: '03', title: '失败的假释 vs 失败的缓刑', ...SCENES.paroleProbationCompare},
  {id: 'limitation-period-ladder', number: '04', title: '追诉时效·期限与计算', ...SCENES.limitationPeriodLadder},
  {id: 'extension-interruption-track', number: '05', title: '时效的延长·中断·两高权力', ...SCENES.extensionInterruptionTrack},
];

export const ExecutionExpiryStationPlayer = () => <RemotionDeck animationId="execution-expiry-station" component={ExecutionExpiryStation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑罚的执行和消灭：减刑·假释·追诉时效" />;
export default ExecutionExpiryStationPlayer;
