import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {TerritorialJurisdiction} from './TerritorialJurisdiction';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="TerritorialJurisdiction"
    component={withAnimationTypography(TerritorialJurisdiction, getAnimationTypographyConfiguration('territorial-jurisdiction'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
