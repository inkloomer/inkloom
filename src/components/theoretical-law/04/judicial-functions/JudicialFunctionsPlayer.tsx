import {JudicialFunctions} from '@/animations/theoretical-law/04/judicial-functions/remotion/JudicialFunctions';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judicial-functions/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'five-functions', number: '01', title: '五音钟楼：司法的功能', ...SCENES.fiveFunctions},
  {id: 'distinctions', number: '02', title: '辨析三室：直接间接·应然实然·申诉代理', ...SCENES.distinctions},
];

export const JudicialFunctionsPlayer = () => (
  <RemotionDeck
    animationId="judicial-functions"
    component={JudicialFunctions}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="司法的功能：五音钟楼"
  />
);

export default JudicialFunctionsPlayer;
