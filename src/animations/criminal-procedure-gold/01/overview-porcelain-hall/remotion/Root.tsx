import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {OverviewPorcelainHall} from './OverviewPorcelainHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="OverviewPorcelainHall" component={withAnimationTypography(OverviewPorcelainHall, getAnimationTypographyConfiguration('overview-porcelain-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
