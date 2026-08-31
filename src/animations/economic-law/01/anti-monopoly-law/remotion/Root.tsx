import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AntiMonopolyLaw} from './AntiMonopolyLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="AntiMonopolyLaw" component={withAnimationTypography(AntiMonopolyLaw,getAnimationTypographyConfiguration('anti-monopoly-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
