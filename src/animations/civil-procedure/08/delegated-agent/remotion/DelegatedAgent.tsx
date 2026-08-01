import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AuthorizationForkScene, MediationBoundaryScene, SpecialAuthorizationScene, StageBoundaryScene} from './scenes/DelegatedAgentScenes';

export const DelegatedAgent = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-authorization-fork" {...SCENES.authorizationFork}><AuthorizationForkScene /></TimelineSequence>
    <TimelineSequence name="02-special-authorization" {...SCENES.specialAuthorization}><SpecialAuthorizationScene /></TimelineSequence>
    <TimelineSequence name="03-mediation-boundary" {...SCENES.mediationBoundary}><MediationBoundaryScene /></TimelineSequence>
    <TimelineSequence name="04-stage-boundary" {...SCENES.stageBoundary}><StageBoundaryScene /></TimelineSequence>
  </AbsoluteFill>
);
