import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConsumerProtectionLaw} from './ConsumerProtectionLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ConsumerProtectionLaw" component={withAnimationTypography(ConsumerProtectionLaw,getAnimationTypographyConfiguration('consumer-protection-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
