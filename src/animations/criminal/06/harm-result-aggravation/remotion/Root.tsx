import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {HarmResultAggravation} from './HarmResultAggravation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="HarmResultAggravation" component={withAnimationTypography(HarmResultAggravation, getAnimationTypographyConfiguration('harm-result-aggravation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
