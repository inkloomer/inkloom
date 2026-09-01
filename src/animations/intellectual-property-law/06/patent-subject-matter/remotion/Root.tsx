import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PatentSubjectMatter} from './PatentSubjectMatter';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PatentSubjectMatter" component={withAnimationTypography(PatentSubjectMatter,getAnimationTypographyConfiguration('patent-subject-matter'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
