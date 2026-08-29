import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ContributionDefectAudit} from './ContributionDefectAudit';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ContributionDefectAudit" component={withAnimationTypography(ContributionDefectAudit, getAnimationTypographyConfiguration('contribution-defect-audit'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
