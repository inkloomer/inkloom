import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ShareholderRepresentativeAction} from './ShareholderRepresentativeAction';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ShareholderRepresentativeAction" component={withAnimationTypography(ShareholderRepresentativeAction,getAnimationTypographyConfiguration('shareholder-representative-action'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
