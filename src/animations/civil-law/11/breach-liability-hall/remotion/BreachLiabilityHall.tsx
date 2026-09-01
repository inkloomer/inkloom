import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CulpaFormulaScene, HarmfulPerformanceScene, PenaltyDepositScene, StrictLiabilityScene} from './BreachLiabilityScenes';

export const BreachLiabilityHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-culpa-formula-gates" {...SCENES['culpa-formula-gates']}>
      <CulpaFormulaScene />
    </TimelineSequence>
    <TimelineSequence name="02-strict-liability-scales" {...SCENES['strict-liability-scales']}>
      <StrictLiabilityScene />
    </TimelineSequence>
    <TimelineSequence name="03-harmful-performance-fork" {...SCENES['harmful-performance-fork']}>
      <HarmfulPerformanceScene />
    </TimelineSequence>
    <TimelineSequence name="04-penalty-deposit-ledgers" {...SCENES['penalty-deposit-ledgers']}>
      <PenaltyDepositScene />
    </TimelineSequence>
  </AbsoluteFill>
);
