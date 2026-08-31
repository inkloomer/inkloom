import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CumulationScene, ElementsGateScene, ReturnScopeScene, ReturnTargetScene} from './UnjustEnrichmentScenes';

export const UnjustEnrichmentHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-elements-gate" {...SCENES['elements-gate']}>
      <ElementsGateScene />
    </TimelineSequence>
    <TimelineSequence name="02-return-scope-lane" {...SCENES['return-scope-lane']}>
      <ReturnScopeScene />
    </TimelineSequence>
    <TimelineSequence name="03-return-target-fork" {...SCENES['return-target-fork']}>
      <ReturnTargetScene />
    </TimelineSequence>
    <TimelineSequence name="04-cumulation-ledger" {...SCENES['cumulation-ledger']}>
      <CumulationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
