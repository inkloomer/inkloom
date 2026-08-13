import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BankruptcyGrounds} from './BankruptcyGrounds';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BankruptcyGrounds" component={withAnimationTypography(BankruptcyGrounds,getAnimationTypographyConfiguration('bankruptcy-grounds'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
