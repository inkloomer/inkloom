import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PartnershipPropertyDistribution} from './PartnershipPropertyDistribution';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PartnershipPropertyDistribution" component={withAnimationTypography(PartnershipPropertyDistribution,getAnimationTypographyConfiguration('partnership-property-distribution'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
