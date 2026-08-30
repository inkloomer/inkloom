import {CulpabilityRingAssay} from '@/animations/criminal/10/culpability-ring-assay/remotion/CulpabilityRingAssay';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/10/culpability-ring-assay/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'culpability-gate-line', number: '01', title: '核心原理·责任审查闸线', ...SCENES.culpabilityGateLine},
  {id: 'age-ring-grades', number: '02', title: '责任年龄·年轮总刻度', ...SCENES.ageRingGrades},
  {id: 'age-12-14-gates', number: '03', title: '12至14周岁·极罪核准链', ...SCENES.ageTwelveFourteen},
  {id: 'age-14-16-eight-crimes', number: '04', title: '14至16周岁·八罪检索盘', ...SCENES.ageFourteenSixteen},
  {id: 'capacity-core-grades', number: '05', title: '责任能力·心材三级', ...SCENES.capacityCoreGrades},
  {id: 'act-responsibility-simultaneity', number: '06', title: '行为与责任同时存在·原因自由行为', ...SCENES.actResponsibilitySimultaneity},
  {id: 'mistake-fact-law-fork', number: '07', title: '认识错误·事实/法律分岔', ...SCENES.mistakeFactLawFork},
  {id: 'expectation-possibility', number: '08', title: '期待可能性·岩缝斜木', ...SCENES.expectationPossibility},
];

export const CulpabilityRingAssayPlayer = () => <RemotionDeck animationId="culpability-ring-assay" component={CulpabilityRingAssay} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="排除责任事由：责任年龄·责任能力·法律认识错误·期待可能性" />;
export default CulpabilityRingAssayPlayer;
