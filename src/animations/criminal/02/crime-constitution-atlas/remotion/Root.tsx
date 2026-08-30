import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CrimeConstitutionAtlas} from './CrimeConstitutionAtlas';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CrimeConstitutionAtlas" component={withAnimationTypography(CrimeConstitutionAtlas, getAnimationTypographyConfiguration('crime-constitution-atlas'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
