import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DefenseGateChecklistScene} from './scenes-defense';
import {DefenseLimitsSpecialScene} from './scenes-limits';
import {MatrixConsentRowScene} from './scenes-matrix';
import {NecessityEscapeSideScene} from './scenes-necessity';
import {TimingIntentCasesScene} from './scenes-timing';

export const JustificationDefenseNecessity = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-defense-gate-checklist" {...SCENES.defenseGateChecklist}><DefenseGateChecklistScene /></TimelineSequence>
    <TimelineSequence name="02-timing-intent-cases" {...SCENES.timingIntentCases}><TimingIntentCasesScene /></TimelineSequence>
    <TimelineSequence name="03-defense-limits-special" {...SCENES.defenseLimitsSpecial}><DefenseLimitsSpecialScene /></TimelineSequence>
    <TimelineSequence name="04-necessity-escape-side" {...SCENES.necessityEscapeSide}><NecessityEscapeSideScene /></TimelineSequence>
    <TimelineSequence name="05-matrix-consent-row" {...SCENES.matrixConsentRow}><MatrixConsentRowScene /></TimelineSequence>
  </AbsoluteFill>
);
