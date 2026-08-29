import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SubjectsResponsibility} from './SubjectsResponsibility';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SubjectsResponsibility"
    component={withAnimationTypography(SubjectsResponsibility, getAnimationTypographyConfiguration('subjects-responsibility'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
