import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {UrbanRealEstateLaw} from '@/animations/economic-law/10/urban-real-estate-law/remotion/UrbanRealEstateLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/10/urban-real-estate-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'urban-real-estate-law-scene-01', number: '01', title: '限期动工', ...SCENES['urban-real-estate-law-scene-01']},
  {id: 'urban-real-estate-law-scene-02', number: '02', title: '房地产转让', ...SCENES['urban-real-estate-law-scene-02']},
  {id: 'urban-real-estate-law-scene-03', number: '03', title: '预售抵押租赁', ...SCENES['urban-real-estate-law-scene-03']},
];
export const UrbanRealEstateLawPlayer=()=> <RemotionDeck animationId="urban-real-estate-law" title="城市房地产管理法" component={UrbanRealEstateLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default UrbanRealEstateLawPlayer;
