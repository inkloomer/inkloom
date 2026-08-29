import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ForeignTradeAdministration} from './ForeignTradeAdministration';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ForeignTradeAdministration"
    component={withAnimationTypography(ForeignTradeAdministration, getAnimationTypographyConfiguration('foreign-trade-administration'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
