import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BankruptcyAdministrator} from './BankruptcyAdministrator';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="BankruptcyAdministrator" component={withAnimationTypography(BankruptcyAdministrator,getAnimationTypographyConfiguration('bankruptcy-administrator'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
