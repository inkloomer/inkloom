import {OccupationalEmbezzlementFlowchart} from '@/animations/criminal/19/occupational-embezzlement-flowchart/remotion/OccupationalEmbezzlementFlowchart';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/criminal/19/occupational-embezzlement-flowchart/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'formula-assembly',number:'01',title:'A + B1 + B2 + B3',...SCENES.formulaAssembly},
  {id:'subject-gate',number:'02',title:'特殊主体检验',...SCENES.subjectGate},
  {id:'property-duty-gates',number:'03',title:'单位财物与职务便利',...SCENES.propertyDutyGates},
];
export const OccupationalEmbezzlementFlowchartPlayer=()=> <RemotionDeck animationId="occupational-embezzlement-flowchart" component={OccupationalEmbezzlementFlowchart} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="职务侵占罪判断流程"/>;
export default OccupationalEmbezzlementFlowchartPlayer;
