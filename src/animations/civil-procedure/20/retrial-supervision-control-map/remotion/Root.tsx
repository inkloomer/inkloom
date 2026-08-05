import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {RetrialSupervisionControlMap} from './RetrialSupervisionControlMap';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="RetrialSupervisionControlMap" component={withAnimationTypography(RetrialSupervisionControlMap,getAnimationTypographyConfiguration('retrial-supervision-control-map'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
