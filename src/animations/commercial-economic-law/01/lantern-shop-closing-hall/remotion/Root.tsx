import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {LanternShopClosingHall} from './LanternShopClosingHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="LanternShopClosingHall" component={withAnimationTypography(LanternShopClosingHall, getAnimationTypographyConfiguration('lantern-shop-closing-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
