import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BankruptcyReorganization} from './BankruptcyReorganization';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BankruptcyReorganization" component={withAnimationTypography(BankruptcyReorganization,getAnimationTypographyConfiguration('bankruptcy-reorganization'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
