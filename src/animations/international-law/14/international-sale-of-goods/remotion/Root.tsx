import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {InternationalSaleOfGoods} from './InternationalSaleOfGoods';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="InternationalSaleOfGoods"
    component={withAnimationTypography(InternationalSaleOfGoods, getAnimationTypographyConfiguration('international-sale-of-goods'))}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
