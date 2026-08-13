import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BankruptcyCosts} from './BankruptcyCosts';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BankruptcyCosts" component={withAnimationTypography(BankruptcyCosts,getAnimationTypographyConfiguration('bankruptcy-costs'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
