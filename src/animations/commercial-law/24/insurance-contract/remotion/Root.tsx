import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {InsuranceContract} from './InsuranceContract';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="InsuranceContract" component={withAnimationTypography(InsuranceContract,getAnimationTypographyConfiguration('insurance-contract'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
