import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {EvidenceReview} from './EvidenceReview';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidenceReview" component={withAnimationTypography(EvidenceReview, getAnimationTypographyConfiguration('evidence-review'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
