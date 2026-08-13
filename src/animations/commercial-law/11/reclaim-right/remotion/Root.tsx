import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ReclaimRight} from './ReclaimRight';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ReclaimRight" component={withAnimationTypography(ReclaimRight,getAnimationTypographyConfiguration('reclaim-right'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
