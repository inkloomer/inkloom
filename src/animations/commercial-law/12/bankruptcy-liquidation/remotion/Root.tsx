import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BankruptcyLiquidation} from './BankruptcyLiquidation';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BankruptcyLiquidation" component={withAnimationTypography(BankruptcyLiquidation,getAnimationTypographyConfiguration('bankruptcy-liquidation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
