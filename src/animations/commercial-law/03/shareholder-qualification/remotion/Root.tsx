import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ShareholderQualification} from './ShareholderQualification';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ShareholderQualification" component={withAnimationTypography(ShareholderQualification,getAnimationTypographyConfiguration('shareholder-qualification'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
