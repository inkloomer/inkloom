import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PeriodCalculation} from './PeriodCalculation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PeriodCalculation" component={withAnimationTypography(PeriodCalculation, getAnimationTypographyConfiguration('period-calculation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
