import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CardSellingFundsViewpoint} from './CardSellingFundsViewpoint';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CardSellingFundsViewpoint" component={withAnimationTypography(CardSellingFundsViewpoint, getAnimationTypographyConfiguration('card-selling-funds-viewpoint'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
