import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SoleProprietorKitchenLegacy} from './SoleProprietorKitchenLegacy';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="SoleProprietorKitchenLegacy" component={withAnimationTypography(SoleProprietorKitchenLegacy, getAnimationTypographyConfiguration('sole-proprietor-kitchen-legacy'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
