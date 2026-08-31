import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LandManagementLaw} from './LandManagementLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="LandManagementLaw" component={withAnimationTypography(LandManagementLaw,getAnimationTypographyConfiguration('land-management-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
