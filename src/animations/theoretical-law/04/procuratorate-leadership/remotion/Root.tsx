import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ProcuratorateLeadership} from './ProcuratorateLeadership';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ProcuratorateLeadership"
    component={withAnimationTypography(
      ProcuratorateLeadership,
      getAnimationTypographyConfiguration('procuratorate-leadership'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
