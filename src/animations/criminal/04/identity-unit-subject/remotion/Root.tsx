import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {IdentityUnitSubject} from './IdentityUnitSubject';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="IdentityUnitSubject" component={withAnimationTypography(IdentityUnitSubject, getAnimationTypographyConfiguration('identity-unit-subject'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
