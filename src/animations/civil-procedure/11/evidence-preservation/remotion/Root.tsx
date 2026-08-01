import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {EvidencePreservation} from './EvidencePreservation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidencePreservation" component={withAnimationTypography(EvidencePreservation, getAnimationTypographyConfiguration('evidence-preservation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
