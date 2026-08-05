import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ArbitrationValidityRoute} from './ArbitrationValidityRoute';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ArbitrationValidityRoute" component={withAnimationTypography(ArbitrationValidityRoute,getAnimationTypographyConfiguration('arbitration-validity-route'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
