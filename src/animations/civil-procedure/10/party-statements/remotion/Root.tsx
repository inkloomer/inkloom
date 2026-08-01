import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion'; import {PartyStatements} from './PartyStatements'; import {DURATION_FRAMES, FPS} from './storyboard'; export const RemotionRoot = () => <Composition id="PartyStatements" component={withAnimationTypography(PartyStatements, getAnimationTypographyConfiguration('party-statements'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
