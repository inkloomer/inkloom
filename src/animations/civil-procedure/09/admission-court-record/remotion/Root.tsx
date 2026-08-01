import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {AdmissionCourtRecord} from './AdmissionCourtRecord';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="AdmissionCourtRecord" component={withAnimationTypography(AdmissionCourtRecord, getAnimationTypographyConfiguration('admission-court-record'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
