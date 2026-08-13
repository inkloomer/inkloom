import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyRestructuring} from './CompanyRestructuring';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyRestructuring" component={withAnimationTypography(CompanyRestructuring,getAnimationTypographyConfiguration('company-restructuring'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
