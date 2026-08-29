import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CaseFilingGatehouse} from './CaseFilingGatehouse';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CaseFilingGatehouse"
    component={withAnimationTypography(
      CaseFilingGatehouse,
      getAnimationTypographyConfiguration('case-filing-gatehouse'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
