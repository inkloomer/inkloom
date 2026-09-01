import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CopyrightAuthorship} from './CopyrightAuthorship';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CopyrightAuthorship" component={withAnimationTypography(CopyrightAuthorship,getAnimationTypographyConfiguration('copyright-authorship'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
