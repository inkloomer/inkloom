import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion'; import {OfficialIntermediary} from './OfficialIntermediary'; import {DURATION_FRAMES,FPS} from './storyboard'; export const RemotionRoot=()=> <Composition id="OfficialIntermediary" component={withAnimationTypography(OfficialIntermediary, getAnimationTypographyConfiguration('official-intermediary'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
