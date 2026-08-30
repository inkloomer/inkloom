import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PenaltyScaleOffice} from './PenaltyScaleOffice';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PenaltyScaleOffice" component={withAnimationTypography(PenaltyScaleOffice, getAnimationTypographyConfiguration('penalty-scale-office'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
