import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {InspectionRecord} from './InspectionRecord';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="InspectionRecord" component={withAnimationTypography(InspectionRecord, getAnimationTypographyConfiguration('inspection-record'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
