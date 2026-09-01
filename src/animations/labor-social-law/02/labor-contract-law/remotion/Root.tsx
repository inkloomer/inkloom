import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LaborContractLaw} from './LaborContractLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="LaborContractLaw" component={withAnimationTypography(LaborContractLaw,getAnimationTypographyConfiguration('labor-contract-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
