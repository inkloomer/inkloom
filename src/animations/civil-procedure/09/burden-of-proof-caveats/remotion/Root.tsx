import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {BurdenOfProofCaveats} from './BurdenOfProofCaveats';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="BurdenOfProofCaveats" component={withAnimationTypography(BurdenOfProofCaveats, getAnimationTypographyConfiguration('burden-of-proof-caveats'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
