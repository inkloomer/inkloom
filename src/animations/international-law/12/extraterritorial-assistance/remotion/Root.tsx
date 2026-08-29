import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ExtraterritorialAssistance} from './ExtraterritorialAssistance';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ExtraterritorialAssistance"
    component={withAnimationTypography(ExtraterritorialAssistance, getAnimationTypographyConfiguration('extraterritorial-assistance'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
