import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {InvestigationFieldKit} from './InvestigationFieldKit';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="InvestigationFieldKit" component={withAnimationTypography(InvestigationFieldKit, getAnimationTypographyConfiguration('investigation-field-kit'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
