import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PreservationRemedySwitchboard} from './PreservationRemedySwitchboard';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreservationRemedySwitchboard" component={withAnimationTypography(PreservationRemedySwitchboard, getAnimationTypographyConfiguration('preservation-remedy-switchboard'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
