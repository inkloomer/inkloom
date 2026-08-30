import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ComplicityPrinciplesJointPrincipal} from './ComplicityPrinciplesJointPrincipal';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ComplicityPrinciplesJointPrincipal" component={withAnimationTypography(ComplicityPrinciplesJointPrincipal, getAnimationTypographyConfiguration('complicity-principles-joint-principal'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
