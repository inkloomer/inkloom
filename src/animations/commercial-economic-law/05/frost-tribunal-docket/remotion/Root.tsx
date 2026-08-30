import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {FrostTribunalDocket} from './FrostTribunalDocket';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="FrostTribunalDocket" component={withAnimationTypography(FrostTribunalDocket, getAnimationTypographyConfiguration('frost-tribunal-docket'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
