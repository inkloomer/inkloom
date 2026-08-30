import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {AmberTwinScale} from './AmberTwinScale';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="AmberTwinScale" component={withAnimationTypography(AmberTwinScale, getAnimationTypographyConfiguration('amber-twin-scale'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
