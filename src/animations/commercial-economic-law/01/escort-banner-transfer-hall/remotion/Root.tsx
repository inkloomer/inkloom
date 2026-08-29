import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {EscortBannerTransferHall} from './EscortBannerTransferHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EscortBannerTransferHall" component={withAnimationTypography(EscortBannerTransferHall, getAnimationTypographyConfiguration('escort-banner-transfer-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
