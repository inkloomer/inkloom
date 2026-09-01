import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {EnvironmentalProtectionLaw} from '@/animations/environment-resource-law/01/environmental-protection-law/remotion/EnvironmentalProtectionLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/environment-resource-law/01/environmental-protection-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'environmental-protection-law-scene-01', number: '01', title: '环评制度', ...SCENES['environmental-protection-law-scene-01']},
  {id: 'environmental-protection-law-scene-02', number: '02', title: '环保制度群', ...SCENES['environmental-protection-law-scene-02']},
  {id: 'environmental-protection-law-scene-03', number: '03', title: '法律责任', ...SCENES['environmental-protection-law-scene-03']},
];
export const EnvironmentalProtectionLawPlayer=()=> <RemotionDeck animationId="environmental-protection-law" title="环境保护法" component={EnvironmentalProtectionLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default EnvironmentalProtectionLawPlayer;
