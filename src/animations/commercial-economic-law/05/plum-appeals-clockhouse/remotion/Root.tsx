import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PlumAppealsClockhouse} from './PlumAppealsClockhouse';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PlumAppealsClockhouse" component={withAnimationTypography(PlumAppealsClockhouse, getAnimationTypographyConfiguration('plum-appeals-clockhouse'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
