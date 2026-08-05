import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PublicNoticeCancellationPath} from './PublicNoticeCancellationPath';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PublicNoticeCancellationPath" component={withAnimationTypography(PublicNoticeCancellationPath,getAnimationTypographyConfiguration('public-notice-cancellation-path'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
