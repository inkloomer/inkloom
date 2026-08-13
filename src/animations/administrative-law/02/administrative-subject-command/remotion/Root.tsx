import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AdministrativeSubjectCommand} from './AdministrativeSubjectCommand';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="AdministrativeSubjectCommand" component={withAnimationTypography(AdministrativeSubjectCommand,getAnimationTypographyConfiguration('administrative-subject-command'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
