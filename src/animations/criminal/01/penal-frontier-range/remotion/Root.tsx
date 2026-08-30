import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PenalFrontierRange} from './PenalFrontierRange';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PenalFrontierRange" component={withAnimationTypography(PenalFrontierRange, getAnimationTypographyConfiguration('penal-frontier-range'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
