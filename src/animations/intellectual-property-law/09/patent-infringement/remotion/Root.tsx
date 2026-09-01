import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PatentInfringement} from './PatentInfringement';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PatentInfringement" component={withAnimationTypography(PatentInfringement,getAnimationTypographyConfiguration('patent-infringement'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
