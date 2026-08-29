import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LawAndHumanRights} from './LawAndHumanRights';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LawAndHumanRights"
    component={withAnimationTypography(
      LawAndHumanRights,
      getAnimationTypographyConfiguration('law-and-human-rights'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
