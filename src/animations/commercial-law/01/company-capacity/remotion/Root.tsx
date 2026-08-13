import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyCapacity} from './CompanyCapacity';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyCapacity" component={withAnimationTypography(CompanyCapacity,getAnimationTypographyConfiguration('company-capacity'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
