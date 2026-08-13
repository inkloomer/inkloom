import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyIncorporation} from './CompanyIncorporation';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyIncorporation" component={withAnimationTypography(CompanyIncorporation,getAnimationTypographyConfiguration('company-incorporation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
