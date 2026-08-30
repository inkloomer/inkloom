import {PenalFrontierRange} from '@/animations/criminal/01/penal-frontier-range/remotion/PenalFrontierRange';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/01/penal-frontier-range/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'technique-range', number: '01', title: '解释技巧：五支箭的落点', ...SCENES.techniqueRange},
  {id: 'analogy-exam-strip', number: '02', title: '扩大还是类推：两条界线·六连真题', ...SCENES.analogyExamStrip},
  {id: 'reasons-relationship-bench', number: '03', title: '解释理由：四块论证牌·双引擎关系', ...SCENES.reasonsRelationshipBench},
  {id: 'nulla-poena-gate', number: '04', title: '罪刑法定：一堵墙·两扇门', ...SCENES.nullaPoenaGate},
  {id: 'space-jurisdiction-map', number: '05', title: '空间效力：四向关防', ...SCENES.spaceJurisdictionMap},
  {id: 'time-effect-dial', number: '06', title: '时间效力：从旧兼从轻', ...SCENES.timeEffectDial},
];

export const PenalFrontierRangePlayer = () => <RemotionDeck animationId="penal-frontier-range" component={PenalFrontierRange} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑法论：解释射程·罪刑法定·效力边疆" />;
export default PenalFrontierRangePlayer;
