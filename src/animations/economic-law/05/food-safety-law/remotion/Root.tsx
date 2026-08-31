import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {FoodSafetyLaw} from './FoodSafetyLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="FoodSafetyLaw" component={withAnimationTypography(FoodSafetyLaw,getAnimationTypographyConfiguration('food-safety-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
