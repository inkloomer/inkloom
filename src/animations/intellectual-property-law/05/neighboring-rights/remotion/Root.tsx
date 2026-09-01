import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NeighboringRights} from './NeighboringRights';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="NeighboringRights" component={withAnimationTypography(NeighboringRights,getAnimationTypographyConfiguration('neighboring-rights'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
