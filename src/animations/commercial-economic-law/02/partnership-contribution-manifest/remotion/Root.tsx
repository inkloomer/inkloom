import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PartnershipContributionManifest} from './PartnershipContributionManifest';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PartnershipContributionManifest" component={withAnimationTypography(PartnershipContributionManifest, getAnimationTypographyConfiguration('partnership-contribution-manifest'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
