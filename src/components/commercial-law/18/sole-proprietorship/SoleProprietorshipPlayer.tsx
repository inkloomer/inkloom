import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {SoleProprietorship} from '@/animations/commercial-law/18/sole-proprietorship/remotion/SoleProprietorship';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/18/sole-proprietorship/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'sole-proprietorship-scene-01', number: '01', title: '三要素', ...SCENES['sole-proprietorship-scene-01']},
  {id: 'sole-proprietorship-scene-02', number: '02', title: '责任与除斥期', ...SCENES['sole-proprietorship-scene-02']},
  {id: 'sole-proprietorship-scene-03', number: '03', title: '三体对比与转换', ...SCENES['sole-proprietorship-scene-03']},
];
export const SoleProprietorshipPlayer=()=> <RemotionDeck animationId="sole-proprietorship" title="个人独资企业法" component={SoleProprietorship} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default SoleProprietorshipPlayer;
