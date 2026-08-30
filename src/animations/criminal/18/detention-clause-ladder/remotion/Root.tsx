import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {DetentionClauseLadder} from './DetentionClauseLadder';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="DetentionClauseLadder"
    component={withAnimationTypography(DetentionClauseLadder, getAnimationTypographyConfiguration('detention-clause-ladder'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
