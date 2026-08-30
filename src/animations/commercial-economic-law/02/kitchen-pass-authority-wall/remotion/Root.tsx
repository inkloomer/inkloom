import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {KitchenPassAuthorityWall} from './KitchenPassAuthorityWall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="KitchenPassAuthorityWall" component={withAnimationTypography(KitchenPassAuthorityWall, getAnimationTypographyConfiguration('kitchen-pass-authority-wall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
