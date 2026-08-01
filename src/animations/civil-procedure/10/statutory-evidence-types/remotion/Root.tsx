import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {StatutoryEvidenceTypes} from './StatutoryEvidenceTypes';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="StatutoryEvidenceTypes" component={withAnimationTypography(StatutoryEvidenceTypes, getAnimationTypographyConfiguration('statutory-evidence-types'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
