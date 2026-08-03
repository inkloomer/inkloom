import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ForeignDocumentAuthentication} from './ForeignDocumentAuthentication';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ForeignDocumentAuthentication" component={withAnimationTypography(ForeignDocumentAuthentication, getAnimationTypographyConfiguration('foreign-document-authentication'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
