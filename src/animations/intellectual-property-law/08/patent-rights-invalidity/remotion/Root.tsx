import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PatentRightsInvalidity} from './PatentRightsInvalidity';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PatentRightsInvalidity" component={withAnimationTypography(PatentRightsInvalidity,getAnimationTypographyConfiguration('patent-rights-invalidity'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
