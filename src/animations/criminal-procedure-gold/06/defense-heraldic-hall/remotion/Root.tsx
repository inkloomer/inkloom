import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {DefenseHeraldicHall} from './DefenseHeraldicHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="DefenseHeraldicHall" component={withAnimationTypography(DefenseHeraldicHall, getAnimationTypographyConfiguration('defense-heraldic-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
