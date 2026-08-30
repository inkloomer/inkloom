import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {OrgansArchiveBureau} from './OrgansArchiveBureau';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="OrgansArchiveBureau" component={withAnimationTypography(OrgansArchiveBureau, getAnimationTypographyConfiguration('organs-archive-bureau'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
