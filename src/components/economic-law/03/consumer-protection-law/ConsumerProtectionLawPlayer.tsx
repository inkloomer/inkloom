import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ConsumerProtectionLaw} from '@/animations/economic-law/03/consumer-protection-law/remotion/ConsumerProtectionLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/03/consumer-protection-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'consumer-protection-law-scene-01', number: '01', title: '权利与义务', ...SCENES['consumer-protection-law-scene-01']},
  {id: 'consumer-protection-law-scene-02', number: '02', title: '无理由退货', ...SCENES['consumer-protection-law-scene-02']},
  {id: 'consumer-protection-law-scene-03', number: '03', title: '纠纷解决', ...SCENES['consumer-protection-law-scene-03']},
  {id: 'consumer-protection-law-scene-04', number: '04', title: '法律责任', ...SCENES['consumer-protection-law-scene-04']},
];
export const ConsumerProtectionLawPlayer=()=> <RemotionDeck animationId="consumer-protection-law" title="消费者权益保护法" component={ConsumerProtectionLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ConsumerProtectionLawPlayer;
