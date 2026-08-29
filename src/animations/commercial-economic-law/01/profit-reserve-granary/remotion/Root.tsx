import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ProfitReserveGranary} from './ProfitReserveGranary';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ProfitReserveGranary" component={withAnimationTypography(ProfitReserveGranary, getAnimationTypographyConfiguration('profit-reserve-granary'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
