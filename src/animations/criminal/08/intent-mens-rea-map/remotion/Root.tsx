import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {IntentMensReaMap} from './IntentMensReaMap';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="IntentMensReaMap" component={withAnimationTypography(IntentMensReaMap, getAnimationTypographyConfiguration('intent-mens-rea-map'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
