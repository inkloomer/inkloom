import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PeriodRelayStation} from './PeriodRelayStation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PeriodRelayStation" component={withAnimationTypography(PeriodRelayStation, getAnimationTypographyConfiguration('period-relay-station'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
