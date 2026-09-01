import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ParticipationTimingWithdrawal} from './ParticipationTimingWithdrawal';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ParticipationTimingWithdrawal" component={withAnimationTypography(ParticipationTimingWithdrawal, getAnimationTypographyConfiguration('participation-timing-withdrawal'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
