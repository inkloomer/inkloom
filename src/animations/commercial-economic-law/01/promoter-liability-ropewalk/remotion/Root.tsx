import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PromoterLiabilityRopewalk} from './PromoterLiabilityRopewalk';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PromoterLiabilityRopewalk" component={withAnimationTypography(PromoterLiabilityRopewalk, getAnimationTypographyConfiguration('promoter-liability-ropewalk'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
