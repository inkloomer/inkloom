import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion'; import {WitnessTestimony} from './WitnessTestimony'; import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="WitnessTestimony" component={withAnimationTypography(WitnessTestimony, getAnimationTypographyConfiguration('witness-testimony'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
