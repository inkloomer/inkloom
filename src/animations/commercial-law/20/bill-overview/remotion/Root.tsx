import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BillOverview} from './BillOverview';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BillOverview" component={withAnimationTypography(BillOverview,getAnimationTypographyConfiguration('bill-overview'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
