import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CorporateOrgans} from './CorporateOrgans';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CorporateOrgans" component={withAnimationTypography(CorporateOrgans,getAnimationTypographyConfiguration('corporate-organs'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
