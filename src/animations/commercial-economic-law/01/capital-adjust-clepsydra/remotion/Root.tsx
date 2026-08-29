import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CapitalAdjustClepsydra} from './CapitalAdjustClepsydra';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CapitalAdjustClepsydra" component={withAnimationTypography(CapitalAdjustClepsydra, getAnimationTypographyConfiguration('capital-adjust-clepsydra'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
