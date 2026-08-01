import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {ExpertParticipationScene, InitiationScene, ScopeScene} from './scenes/InspectionScenes';
import {SCENES} from './storyboard';

export const InspectionRecord = () => <AbsoluteFill>
  <TimelineSequence name="01-initiation" {...SCENES.initiation}><InitiationScene /></TimelineSequence>
  <TimelineSequence name="02-scope" {...SCENES.scope}><ScopeScene /></TimelineSequence>
  <TimelineSequence name="03-expert-participation" {...SCENES.expertParticipation}><ExpertParticipationScene /></TimelineSequence>
</AbsoluteFill>;
