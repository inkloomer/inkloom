import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AdministrativePrinciplesCompass} from './AdministrativePrinciplesCompass';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="AdministrativePrinciplesCompass" component={withAnimationTypography(AdministrativePrinciplesCompass,getAnimationTypographyConfiguration('administrative-principles-compass'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
