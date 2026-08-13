import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompulsionSafetyInterlock} from './CompulsionSafetyInterlock';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CompulsionSafetyInterlock" component={withAnimationTypography(CompulsionSafetyInterlock, getAnimationTypographyConfiguration('compulsion-safety-interlock'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
