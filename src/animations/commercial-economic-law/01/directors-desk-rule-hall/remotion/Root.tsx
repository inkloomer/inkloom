import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {DirectorsDeskRuleHall} from './DirectorsDeskRuleHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="DirectorsDeskRuleHall" component={withAnimationTypography(DirectorsDeskRuleHall, getAnimationTypographyConfiguration('directors-desk-rule-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
