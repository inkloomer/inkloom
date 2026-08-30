import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {LacquerSealBureau} from './LacquerSealBureau';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="LacquerSealBureau" component={withAnimationTypography(LacquerSealBureau, getAnimationTypographyConfiguration('lacquer-seal-bureau'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
