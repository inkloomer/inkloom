import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyPersonality} from './CompanyPersonality';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyPersonality" component={withAnimationTypography(CompanyPersonality,getAnimationTypographyConfiguration('company-personality'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
