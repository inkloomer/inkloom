import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {NaturalResourcesLaw} from '@/animations/environment-resource-law/02/natural-resources-law/remotion/NaturalResourcesLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/environment-resource-law/02/natural-resources-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'natural-resources-law-scene-01', number: '01', title: '森林权属争议', ...SCENES['natural-resources-law-scene-01']},
  {id: 'natural-resources-law-scene-02', number: '02', title: '占用与采伐', ...SCENES['natural-resources-law-scene-02']},
  {id: 'natural-resources-law-scene-03', number: '03', title: '矿业权', ...SCENES['natural-resources-law-scene-03']},
];
export const NaturalResourcesLawPlayer=()=> <RemotionDeck animationId="natural-resources-law" title="自然资源法" component={NaturalResourcesLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default NaturalResourcesLawPlayer;
