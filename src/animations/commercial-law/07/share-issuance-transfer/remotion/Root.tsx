import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ShareIssuanceTransfer} from './ShareIssuanceTransfer';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ShareIssuanceTransfer" component={withAnimationTypography(ShareIssuanceTransfer,getAnimationTypographyConfiguration('share-issuance-transfer'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
