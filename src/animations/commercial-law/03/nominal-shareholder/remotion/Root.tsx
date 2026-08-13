import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NominalShareholder} from './NominalShareholder';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="NominalShareholder" component={withAnimationTypography(NominalShareholder,getAnimationTypographyConfiguration('nominal-shareholder'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
