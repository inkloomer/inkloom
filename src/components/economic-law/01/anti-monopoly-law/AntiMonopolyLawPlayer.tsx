import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {AntiMonopolyLaw} from '@/animations/economic-law/01/anti-monopoly-law/remotion/AntiMonopolyLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/01/anti-monopoly-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'anti-monopoly-law-scene-01', number: '01', title: '适用与审查', ...SCENES['anti-monopoly-law-scene-01']},
  {id: 'anti-monopoly-law-scene-02', number: '02', title: '垄断协议', ...SCENES['anti-monopoly-law-scene-02']},
  {id: 'anti-monopoly-law-scene-03', number: '03', title: '市场支配地位', ...SCENES['anti-monopoly-law-scene-03']},
  {id: 'anti-monopoly-law-scene-04', number: '04', title: '集中与行政垄断', ...SCENES['anti-monopoly-law-scene-04']},
  {id: 'anti-monopoly-law-scene-05', number: '05', title: '调查与救济', ...SCENES['anti-monopoly-law-scene-05']},
];
export const AntiMonopolyLawPlayer=()=> <RemotionDeck animationId="anti-monopoly-law" title="反垄断法" component={AntiMonopolyLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default AntiMonopolyLawPlayer;
