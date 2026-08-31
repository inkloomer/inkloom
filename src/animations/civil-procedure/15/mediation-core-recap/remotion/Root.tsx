import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {MediationCoreRecap} from './MediationCoreRecap';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="MediationCoreRecap" component={withAnimationTypography(MediationCoreRecap, getAnimationTypographyConfiguration('mediation-core-recap'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
