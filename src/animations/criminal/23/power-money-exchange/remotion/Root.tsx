import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PowerMoneyExchange} from './PowerMoneyExchange';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PowerMoneyExchange" component={withAnimationTypography(PowerMoneyExchange, getAnimationTypographyConfiguration('power-money-exchange'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
