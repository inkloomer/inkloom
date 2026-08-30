import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PublicSafetyAlertBoard} from './PublicSafetyAlertBoard';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PublicSafetyAlertBoard" component={withAnimationTypography(PublicSafetyAlertBoard, getAnimationTypographyConfiguration('public-safety-alert-board'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
