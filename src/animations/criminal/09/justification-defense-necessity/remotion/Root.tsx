import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {JustificationDefenseNecessity} from './JustificationDefenseNecessity';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="JustificationDefenseNecessity" component={withAnimationTypography(JustificationDefenseNecessity, getAnimationTypographyConfiguration('justification-defense-necessity'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
