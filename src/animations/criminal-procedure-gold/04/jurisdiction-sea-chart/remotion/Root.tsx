import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {JurisdictionSeaChart} from './JurisdictionSeaChart';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="JurisdictionSeaChart" component={withAnimationTypography(JurisdictionSeaChart, getAnimationTypographyConfiguration('jurisdiction-sea-chart'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
