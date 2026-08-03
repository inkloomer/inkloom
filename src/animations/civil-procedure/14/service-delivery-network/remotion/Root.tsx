import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ServiceDeliveryNetwork} from './ServiceDeliveryNetwork';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ServiceDeliveryNetwork" component={withAnimationTypography(ServiceDeliveryNetwork, getAnimationTypographyConfiguration('service-delivery-network'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
