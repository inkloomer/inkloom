import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {MeasuresNightTower} from './MeasuresNightTower';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="MeasuresNightTower" component={withAnimationTypography(MeasuresNightTower, getAnimationTypographyConfiguration('measures-night-tower'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
