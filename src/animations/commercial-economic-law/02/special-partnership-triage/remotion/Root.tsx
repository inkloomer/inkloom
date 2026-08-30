import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SpecialPartnershipTriage} from './SpecialPartnershipTriage';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="SpecialPartnershipTriage" component={withAnimationTypography(SpecialPartnershipTriage, getAnimationTypographyConfiguration('special-partnership-triage'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
