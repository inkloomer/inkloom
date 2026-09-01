import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {StatusCrimeRolesScene, StatusCombinationTableScene} from './scenes-status';
import {OmissionCombinationScene, ExcessConceptStandardScene} from './scenes-omission';
import {ExcessThreeRolesScene, ShortfallVsExcessScene} from './scenes-roles';
import {MistakePrincipalInstigatorScene, MistakeInstigatorIndirectScene} from './scenes-mistake';
import {VictimAmongOffendersScene} from './scenes-victim';

export const ComplicityCombinationErrors = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-status-crime-roles" {...SCENES.statusCrimeRoles}><StatusCrimeRolesScene /></TimelineSequence>
    <TimelineSequence name="02-status-combination-table" {...SCENES.statusCombinationTable}><StatusCombinationTableScene /></TimelineSequence>
    <TimelineSequence name="03-omission-combination" {...SCENES.omissionCombination}><OmissionCombinationScene /></TimelineSequence>
    <TimelineSequence name="04-excess-concept-standard" {...SCENES.excessConceptStandard}><ExcessConceptStandardScene /></TimelineSequence>
    <TimelineSequence name="05-excess-three-roles" {...SCENES.excessThreeRoles}><ExcessThreeRolesScene /></TimelineSequence>
    <TimelineSequence name="06-shortfall-vs-excess" {...SCENES.shortfallVsExcess}><ShortfallVsExcessScene /></TimelineSequence>
    <TimelineSequence name="07-mistake-principal-instigator" {...SCENES.mistakePrincipalInstigator}><MistakePrincipalInstigatorScene /></TimelineSequence>
    <TimelineSequence name="08-mistake-instigator-indirect" {...SCENES.mistakeInstigatorIndirect}><MistakeInstigatorIndirectScene /></TimelineSequence>
    <TimelineSequence name="09-victim-among-offenders" {...SCENES.victimAmongOffenders}><VictimAmongOffendersScene /></TimelineSequence>
  </AbsoluteFill>
);
