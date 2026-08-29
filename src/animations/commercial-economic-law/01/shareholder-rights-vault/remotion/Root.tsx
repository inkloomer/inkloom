import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ShareholderRightsVault} from './ShareholderRightsVault';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ShareholderRightsVault" component={withAnimationTypography(ShareholderRightsVault, getAnimationTypographyConfiguration('shareholder-rights-vault'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
