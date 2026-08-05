import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PaymentOrderGate} from './PaymentOrderGate';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PaymentOrderGate" component={withAnimationTypography(PaymentOrderGate,getAnimationTypographyConfiguration('payment-order-gate'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
