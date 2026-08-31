import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SoleProprietorship} from './SoleProprietorship';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="SoleProprietorship" component={withAnimationTypography(SoleProprietorship,getAnimationTypographyConfiguration('sole-proprietorship'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
