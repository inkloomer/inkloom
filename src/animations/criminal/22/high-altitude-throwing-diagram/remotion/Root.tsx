import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {HighAltitudeThrowingDiagram} from './HighAltitudeThrowingDiagram';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition id="HighAltitudeThrowingDiagram" component={withAnimationTypography(HighAltitudeThrowingDiagram, getAnimationTypographyConfiguration('high-altitude-throwing-diagram'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
);
