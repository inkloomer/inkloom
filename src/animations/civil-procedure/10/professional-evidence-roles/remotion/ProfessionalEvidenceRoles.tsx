import {AbsoluteFill} from 'remotion'; import {TimelineSequence} from '../../../../shared/remotion-runtime'; import {InitiationRecusalScene, PrivateOpinionScene, RoleTargetsScene} from './scenes/RoleScenes'; import {SCENES} from './storyboard';
export const ProfessionalEvidenceRoles = () => <AbsoluteFill>
  <TimelineSequence name="01-role-targets" {...SCENES.roleTargets}><RoleTargetsScene /></TimelineSequence>
  <TimelineSequence name="02-initiation-recusal" {...SCENES.initiationRecusal}><InitiationRecusalScene /></TimelineSequence>
  <TimelineSequence name="03-private-opinion" {...SCENES.privateOpinion}><PrivateOpinionScene /></TimelineSequence>
</AbsoluteFill>;
