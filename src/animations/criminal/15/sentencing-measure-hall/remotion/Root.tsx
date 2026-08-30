import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SentencingMeasureHall} from './SentencingMeasureHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="SentencingMeasureHall" component={withAnimationTypography(SentencingMeasureHall, getAnimationTypographyConfiguration('sentencing-measure-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
