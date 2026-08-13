import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CivilServantCareerFile} from './CivilServantCareerFile';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CivilServantCareerFile"
    component={withAnimationTypography(CivilServantCareerFile, getAnimationTypographyConfiguration('civil-servant-career-file'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
