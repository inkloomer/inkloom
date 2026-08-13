import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {DebtorPropertyScope} from './DebtorPropertyScope';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="DebtorPropertyScope" component={withAnimationTypography(DebtorPropertyScope,getAnimationTypographyConfiguration('debtor-property-scope'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
