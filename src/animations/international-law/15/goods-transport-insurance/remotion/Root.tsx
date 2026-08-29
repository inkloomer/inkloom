import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {GoodsTransportInsurance} from './GoodsTransportInsurance';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="GoodsTransportInsurance"
    component={withAnimationTypography(GoodsTransportInsurance, getAnimationTypographyConfiguration('goods-transport-insurance'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
