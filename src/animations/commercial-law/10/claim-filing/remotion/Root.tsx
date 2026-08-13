import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ClaimFiling} from './ClaimFiling';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ClaimFiling" component={withAnimationTypography(ClaimFiling,getAnimationTypographyConfiguration('claim-filing'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
