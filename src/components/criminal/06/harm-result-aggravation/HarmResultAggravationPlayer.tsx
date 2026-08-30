import {HarmResultAggravation} from '@/animations/criminal/06/harm-result-aggravation/remotion/HarmResultAggravation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/06/harm-result-aggravation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'harm-fact-ladder', number: '01', title: '法益侵害事实·三级刻度', ...SCENES.harmFactLadder},
  {id: 'aggravated-structure', number: '02', title: '结果加重犯·结构·法定性', ...SCENES.aggravatedStructure},
  {id: 'causation-source-dial', number: '03', title: '因果·因的辨认', ...SCENES.causationSourceDial},
];

export const HarmResultAggravationPlayer = () => <RemotionDeck animationId="harm-result-aggravation" component={HarmResultAggravation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="结果：法益侵害分级·结果加重犯·因果辨认" />;
export default HarmResultAggravationPlayer;
