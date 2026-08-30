import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {OxbloodShieldWorkshop} from './OxbloodShieldWorkshop';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="OxbloodShieldWorkshop" component={withAnimationTypography(OxbloodShieldWorkshop, getAnimationTypographyConfiguration('oxblood-shield-workshop'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
