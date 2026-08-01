import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {EvidenceClassification} from './EvidenceClassification';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidenceClassification" component={withAnimationTypography(EvidenceClassification, getAnimationTypographyConfiguration('evidence-classification'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
