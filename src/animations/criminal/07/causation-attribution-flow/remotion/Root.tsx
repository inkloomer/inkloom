import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CausationAttributionFlow} from './CausationAttributionFlow';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CausationAttributionFlow" component={withAnimationTypography(CausationAttributionFlow, getAnimationTypographyConfiguration('causation-attribution-flow'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
