import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {FoodSafetyLaw} from '@/animations/economic-law/05/food-safety-law/remotion/FoodSafetyLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/05/food-safety-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'food-safety-law-scene-01', number: '01', title: '适用与监测评估', ...SCENES['food-safety-law-scene-01']},
  {id: 'food-safety-law-scene-02', number: '02', title: '食品安全标准', ...SCENES['food-safety-law-scene-02']},
  {id: 'food-safety-law-scene-03', number: '03', title: '食品召回', ...SCENES['food-safety-law-scene-03']},
  {id: 'food-safety-law-scene-04', number: '04', title: '首负与惩罚赔偿', ...SCENES['food-safety-law-scene-04']},
];
export const FoodSafetyLawPlayer=()=> <RemotionDeck animationId="food-safety-law" title="食品安全法" component={FoodSafetyLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default FoodSafetyLawPlayer;
