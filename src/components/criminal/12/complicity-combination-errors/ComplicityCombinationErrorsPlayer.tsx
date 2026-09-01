import {ComplicityCombinationErrors} from '@/animations/criminal/12/complicity-combination-errors/remotion/ComplicityCombinationErrors';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/complicity-combination-errors/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'status-crime-roles', number: '01', title: '身份犯结合：谁有资格坐哪把交椅', ...SCENES.statusCrimeRoles},
  {id: 'status-combination-table', number: '02', title: '三种结合类型＋司法解释特规', ...SCENES.statusCombinationTable},
  {id: 'omission-combination', number: '03', title: '共同犯罪×不作为犯：三间病房', ...SCENES.omissionCombination},
  {id: 'excess-concept-standard', number: '04', title: '实行过限：多干的部分谁背', ...SCENES.excessConceptStandard},
  {id: 'excess-three-roles', number: '05', title: '过限责任：三种角色各自怎么算', ...SCENES.excessThreeRoles},
  {id: 'shortfall-vs-excess', number: '06', title: '实行不足 vs 实行过限', ...SCENES.shortfallVsExcess},
  {id: 'mistake-principal-instigator', number: '07', title: '认识错误：正犯没错，共犯错了', ...SCENES.mistakePrincipalInstigator},
  {id: 'mistake-instigator-indirect', number: '08', title: '教唆犯×间接正犯的错误：统一定教唆犯', ...SCENES.mistakeInstigatorIndirect},
  {id: 'victim-among-offenders', number: '09', title: '乌龙案：犯罪人成了被害人', ...SCENES.victimAmongOffenders},
];

export const ComplicityCombinationErrorsPlayer = () => <RemotionDeck animationId="complicity-combination-errors" component={ComplicityCombinationErrors} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（六）：结合问题·身份·过限·认识错误" />;
export default ComplicityCombinationErrorsPlayer;
