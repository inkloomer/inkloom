import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {EvidenceApothecaryCabinet} from './EvidenceApothecaryCabinet';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidenceApothecaryCabinet" component={withAnimationTypography(EvidenceApothecaryCabinet, getAnimationTypographyConfiguration('evidence-apothecary-cabinet'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
