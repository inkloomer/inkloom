import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BankingLaw} from './BankingLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BankingLaw" component={withAnimationTypography(BankingLaw,getAnimationTypographyConfiguration('banking-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
