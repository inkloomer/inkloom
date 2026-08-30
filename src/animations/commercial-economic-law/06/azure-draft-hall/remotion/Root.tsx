import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {AzureDraftHall} from './AzureDraftHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="AzureDraftHall" component={withAnimationTypography(AzureDraftHall, getAnimationTypographyConfiguration('azure-draft-hall'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
