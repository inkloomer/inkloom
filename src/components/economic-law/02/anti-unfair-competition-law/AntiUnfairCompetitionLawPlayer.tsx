import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {AntiUnfairCompetitionLaw} from '@/animations/economic-law/02/anti-unfair-competition-law/remotion/AntiUnfairCompetitionLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/02/anti-unfair-competition-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'anti-unfair-competition-law-scene-01', number: '01', title: '商业混淆', ...SCENES['anti-unfair-competition-law-scene-01']},
  {id: 'anti-unfair-competition-law-scene-02', number: '02', title: '虚假宣传与贿赂', ...SCENES['anti-unfair-competition-law-scene-02']},
  {id: 'anti-unfair-competition-law-scene-03', number: '03', title: '商业秘密与诋毁', ...SCENES['anti-unfair-competition-law-scene-03']},
  {id: 'anti-unfair-competition-law-scene-04', number: '04', title: '有奖销售与网络竞争', ...SCENES['anti-unfair-competition-law-scene-04']},
];
export const AntiUnfairCompetitionLawPlayer=()=> <RemotionDeck animationId="anti-unfair-competition-law" title="反不正当竞争法" component={AntiUnfairCompetitionLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default AntiUnfairCompetitionLawPlayer;
