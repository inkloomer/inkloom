import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConcreteActLaboratory} from './ConcreteActLaboratory';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ConcreteActLaboratory" component={withAnimationTypography(ConcreteActLaboratory,getAnimationTypographyConfiguration('concrete-act-laboratory'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
