import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LegalInterpretation} from './LegalInterpretation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    component={withAnimationTypography(LegalInterpretation, getAnimationTypographyConfiguration('legal-interpretation'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    height={1080}
    id="LegalInterpretation"
    width={1920}
  />
);
