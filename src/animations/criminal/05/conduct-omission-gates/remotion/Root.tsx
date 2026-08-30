import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ConductOmissionGates} from './ConductOmissionGates';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ConductOmissionGates" component={withAnimationTypography(ConductOmissionGates, getAnimationTypographyConfiguration('conduct-omission-gates'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
