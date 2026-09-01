import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {UnilateralComplicity} from './UnilateralComplicity';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="UnilateralComplicity" component={withAnimationTypography(UnilateralComplicity, getAnimationTypographyConfiguration('unilateral-complicity'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
