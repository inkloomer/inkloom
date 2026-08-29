import {CapitalAdjustClepsydra} from '@/animations/commercial-economic-law/01/capital-adjust-clepsydra/remotion/CapitalAdjustClepsydra';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/capital-adjust-clepsydra/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'capital-rise', number: '01', title: '注水升格：增资的刻度与滴漏', ...SCENES.capitalRise},
  {id: 'uneven-cut', number: '02', title: '斜切水位：非等比减资须全员点头', ...SCENES.unevenCut},
  {id: 'paper-cut', number: '03', title: '简易减资：只拨指针，不放水', ...SCENES.paperCut},
];

export const CapitalAdjustClepsydraPlayer = () => <RemotionDeck animationId="capital-adjust-clepsydra" component={CapitalAdjustClepsydra} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="增资减资：注水、斜切与只拨指针" />;
export default CapitalAdjustClepsydraPlayer;
