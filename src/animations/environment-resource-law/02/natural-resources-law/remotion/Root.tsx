import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NaturalResourcesLaw} from './NaturalResourcesLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="NaturalResourcesLaw" component={withAnimationTypography(NaturalResourcesLaw,getAnimationTypographyConfiguration('natural-resources-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
