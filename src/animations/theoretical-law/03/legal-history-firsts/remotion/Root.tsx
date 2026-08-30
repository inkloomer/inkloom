import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LegalHistoryFirsts} from './LegalHistoryFirsts';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LegalHistoryFirsts"
    component={withAnimationTypography(
      LegalHistoryFirsts,
      getAnimationTypographyConfiguration('legal-history-firsts'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
