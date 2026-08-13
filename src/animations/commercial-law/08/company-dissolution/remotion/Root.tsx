import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyDissolution} from './CompanyDissolution';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyDissolution" component={withAnimationTypography(CompanyDissolution,getAnimationTypographyConfiguration('company-dissolution'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
