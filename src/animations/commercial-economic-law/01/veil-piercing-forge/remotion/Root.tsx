import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {VeilPiercingForge} from './VeilPiercingForge';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="VeilPiercingForge" component={withAnimationTypography(VeilPiercingForge, getAnimationTypographyConfiguration('veil-piercing-forge'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
