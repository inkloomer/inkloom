import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BillRights} from './BillRights';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BillRights" component={withAnimationTypography(BillRights,getAnimationTypographyConfiguration('bill-rights'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
