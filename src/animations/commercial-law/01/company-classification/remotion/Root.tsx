import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CompanyClassification} from './CompanyClassification';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CompanyClassification" component={withAnimationTypography(CompanyClassification,getAnimationTypographyConfiguration('company-classification'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
