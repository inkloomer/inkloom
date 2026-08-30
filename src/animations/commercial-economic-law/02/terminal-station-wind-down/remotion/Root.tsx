import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {TerminalStationWindDown} from './TerminalStationWindDown';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="TerminalStationWindDown" component={withAnimationTypography(TerminalStationWindDown, getAnimationTypographyConfiguration('terminal-station-wind-down'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
