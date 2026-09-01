import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {InstallmentForkScene, RetentionLoopScene, TrialPurchaseScene, TrilogyLedgerScene} from './TrilogySaleScenes';

export const TrilogySaleHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-trial-purchase-cycle" {...SCENES['trial-purchase-cycle']}>
      <TrialPurchaseScene />
    </TimelineSequence>
    <TimelineSequence name="02-installment-protection-fork" {...SCENES['installment-protection-fork']}>
      <InstallmentForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-retention-retrieval-loop" {...SCENES['retention-retrieval-loop']}>
      <RetentionLoopScene />
    </TimelineSequence>
    <TimelineSequence name="04-trilogy-comparison-ledger" {...SCENES['trilogy-comparison-ledger']}>
      <TrilogyLedgerScene />
    </TimelineSequence>
  </AbsoluteFill>
);
