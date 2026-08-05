import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CrossBorderProcedureCompass} from './CrossBorderProcedureCompass';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CrossBorderProcedureCompass" component={withAnimationTypography(CrossBorderProcedureCompass,getAnimationTypographyConfiguration('cross-border-procedure-compass'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
