import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ForeignInvestment} from '@/animations/commercial-law/19/foreign-investment/remotion/ForeignInvestment';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/19/foreign-investment/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'foreign-investment-scene-01', number: '01', title: '负面清单', ...SCENES['foreign-investment-scene-01']},
  {id: 'foreign-investment-scene-02', number: '02', title: '国民待遇', ...SCENES['foreign-investment-scene-02']},
  {id: 'foreign-investment-scene-03', number: '03', title: '保护与审查', ...SCENES['foreign-investment-scene-03']},
];
export const ForeignInvestmentPlayer=()=> <RemotionDeck animationId="foreign-investment" title="外商投资法" component={ForeignInvestment} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ForeignInvestmentPlayer;
