import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PartnershipEstablishment} from './PartnershipEstablishment';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PartnershipEstablishment" component={withAnimationTypography(PartnershipEstablishment,getAnimationTypographyConfiguration('partnership-establishment'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
