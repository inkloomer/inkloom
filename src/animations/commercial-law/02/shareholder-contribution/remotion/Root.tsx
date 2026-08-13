import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ShareholderContribution} from './ShareholderContribution';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ShareholderContribution" component={withAnimationTypography(ShareholderContribution,getAnimationTypographyConfiguration('shareholder-contribution'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
