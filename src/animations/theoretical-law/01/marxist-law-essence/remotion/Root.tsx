import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {MarxistLawEssence} from './MarxistLawEssence';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="MarxistLawEssence"
    component={withAnimationTypography(
      MarxistLawEssence,
      getAnimationTypographyConfiguration('marxist-law-essence'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
