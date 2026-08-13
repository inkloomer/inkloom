import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AbstractActPrintworks} from './AbstractActPrintworks';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="AbstractActPrintworks" component={withAnimationTypography(AbstractActPrintworks,getAnimationTypographyConfiguration('abstract-act-printworks'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
