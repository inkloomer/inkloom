import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ProductQualityLaw} from './ProductQualityLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ProductQualityLaw" component={withAnimationTypography(ProductQualityLaw,getAnimationTypographyConfiguration('product-quality-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
