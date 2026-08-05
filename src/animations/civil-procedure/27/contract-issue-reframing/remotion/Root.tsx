import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ContractIssueReframing} from './ContractIssueReframing';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ContractIssueReframing" component={withAnimationTypography(ContractIssueReframing,getAnimationTypographyConfiguration('contract-issue-reframing'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
