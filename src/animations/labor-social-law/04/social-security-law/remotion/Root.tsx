import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SocialSecurityLaw} from './SocialSecurityLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="SocialSecurityLaw" component={withAnimationTypography(SocialSecurityLaw,getAnimationTypographyConfiguration('social-security-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
