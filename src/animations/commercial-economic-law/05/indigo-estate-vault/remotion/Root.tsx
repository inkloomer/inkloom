import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {IndigoEstateVault} from './IndigoEstateVault';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="IndigoEstateVault" component={withAnimationTypography(IndigoEstateVault, getAnimationTypographyConfiguration('indigo-estate-vault'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
