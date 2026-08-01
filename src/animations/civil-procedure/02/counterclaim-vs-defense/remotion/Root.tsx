import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CounterclaimVsDefense} from './CounterclaimVsDefense';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CounterclaimVsDefense"
    component={withAnimationTypography(CounterclaimVsDefense, getAnimationTypographyConfiguration('counterclaim-vs-defense'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
