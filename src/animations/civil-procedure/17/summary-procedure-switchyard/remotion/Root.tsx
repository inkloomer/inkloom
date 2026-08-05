import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SummaryProcedureSwitchyard} from './SummaryProcedureSwitchyard';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="SummaryProcedureSwitchyard" component={withAnimationTypography(SummaryProcedureSwitchyard, getAnimationTypographyConfiguration('summary-procedure-switchyard'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
