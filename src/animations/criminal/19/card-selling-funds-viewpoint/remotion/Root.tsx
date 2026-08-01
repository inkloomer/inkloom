import {Composition} from 'remotion';
import {CardSellingFundsViewpoint} from './CardSellingFundsViewpoint';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CardSellingFundsViewpoint" component={CardSellingFundsViewpoint} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
