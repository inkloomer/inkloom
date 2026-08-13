import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyLiquidation} from './CompanyLiquidation';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyLiquidation" component={withAnimationTypography(CompanyLiquidation,getAnimationTypographyConfiguration('company-liquidation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
