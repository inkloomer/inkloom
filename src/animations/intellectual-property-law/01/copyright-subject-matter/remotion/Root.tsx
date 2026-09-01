import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CopyrightSubjectMatter} from './CopyrightSubjectMatter';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CopyrightSubjectMatter" component={withAnimationTypography(CopyrightSubjectMatter,getAnimationTypographyConfiguration('copyright-subject-matter'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
