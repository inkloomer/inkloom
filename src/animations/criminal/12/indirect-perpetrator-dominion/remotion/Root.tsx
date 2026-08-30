import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {IndirectPerpetratorDominion} from './IndirectPerpetratorDominion';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="IndirectPerpetratorDominion" component={withAnimationTypography(IndirectPerpetratorDominion, getAnimationTypographyConfiguration('indirect-perpetrator-dominion'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
