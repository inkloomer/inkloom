import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CulpabilityRingAssay} from './CulpabilityRingAssay';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CulpabilityRingAssay" component={withAnimationTypography(CulpabilityRingAssay, getAnimationTypographyConfiguration('culpability-ring-assay'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
