import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PenaltyVerdictArena} from './PenaltyVerdictArena';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PenaltyVerdictArena" component={withAnimationTypography(PenaltyVerdictArena, getAnimationTypographyConfiguration('penalty-verdict-arena'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
