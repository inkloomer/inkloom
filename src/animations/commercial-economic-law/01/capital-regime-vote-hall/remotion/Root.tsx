import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CapitalRegimeVoteHall} from './CapitalRegimeVoteHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CapitalRegimeVoteHall" component={withAnimationTypography(CapitalRegimeVoteHall, getAnimationTypographyConfiguration('capital-regime-vote-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
