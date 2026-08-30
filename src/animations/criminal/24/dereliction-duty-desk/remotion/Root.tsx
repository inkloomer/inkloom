import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {DerelictionDutyDesk} from './DerelictionDutyDesk';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="DerelictionDutyDesk" component={withAnimationTypography(DerelictionDutyDesk, getAnimationTypographyConfiguration('dereliction-duty-desk'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
