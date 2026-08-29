import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConceptOfLawDispute} from './ConceptOfLawDispute';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ConceptOfLawDispute"
    component={withAnimationTypography(
      ConceptOfLawDispute,
      getAnimationTypographyConfiguration('concept-of-law-dispute'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
