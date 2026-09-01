import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {TimingThreePhasesScene, SuccessiveLiabilityRuleScene} from './scenes-tracks';
import {DeathTimeInferenceScene, HouseEntrySuccessiveQuizScene} from './scenes-quiz';
import {WithdrawalConditionsScene, RoleWithdrawalRequirementsScene} from './scenes-withdrawal';
import {WithdrawalFourCasesScene, Exam2024OptionsScene} from './scenes-docket';

export const ParticipationTimingWithdrawal = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-timing-three-phases" {...SCENES.timingThreePhases}><TimingThreePhasesScene /></TimelineSequence>
    <TimelineSequence name="02-successive-liability-rule" {...SCENES.successiveLiabilityRule}><SuccessiveLiabilityRuleScene /></TimelineSequence>
    <TimelineSequence name="03-death-time-inference" {...SCENES.deathTimeInference}><DeathTimeInferenceScene /></TimelineSequence>
    <TimelineSequence name="04-house-entry-successive-quiz" {...SCENES.houseEntrySuccessiveQuiz}><HouseEntrySuccessiveQuizScene /></TimelineSequence>
    <TimelineSequence name="05-withdrawal-conditions" {...SCENES.withdrawalConditions}><WithdrawalConditionsScene /></TimelineSequence>
    <TimelineSequence name="06-role-withdrawal-requirements" {...SCENES.roleWithdrawalRequirements}><RoleWithdrawalRequirementsScene /></TimelineSequence>
    <TimelineSequence name="07-withdrawal-four-cases" {...SCENES.withdrawalFourCases}><WithdrawalFourCasesScene /></TimelineSequence>
    <TimelineSequence name="08-exam-2024-options" {...SCENES.exam2024Options}><Exam2024OptionsScene /></TimelineSequence>
  </AbsoluteFill>
);
