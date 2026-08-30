import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ShareSlipTransitVault} from './ShareSlipTransitVault';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ShareSlipTransitVault" component={withAnimationTypography(ShareSlipTransitVault, getAnimationTypographyConfiguration('share-slip-transit-vault'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
