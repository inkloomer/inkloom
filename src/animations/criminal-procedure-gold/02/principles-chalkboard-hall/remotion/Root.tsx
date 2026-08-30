import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PrinciplesChalkboardHall} from './PrinciplesChalkboardHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PrinciplesChalkboardHall" component={withAnimationTypography(PrinciplesChalkboardHall, getAnimationTypographyConfiguration('principles-chalkboard-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
