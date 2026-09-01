import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {UrbanRuralPlanningLaw} from './UrbanRuralPlanningLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="UrbanRuralPlanningLaw" component={withAnimationTypography(UrbanRuralPlanningLaw,getAnimationTypographyConfiguration('urban-rural-planning-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
