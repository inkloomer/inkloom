import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  InvalidityProcedureScene,
  KinshipSupportLadderScene,
  MarriageFormationGateScene,
  RevocableMarriageScene,
} from './MarriageValidityChainScenes';

export const MarriageValidityChain = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-kinship-support-ladder" {...SCENES['kinship-support-ladder']}>
      <KinshipSupportLadderScene />
    </TimelineSequence>
    <TimelineSequence name="02-marriage-formation-gate" {...SCENES['marriage-formation-gate']}>
      <MarriageFormationGateScene />
    </TimelineSequence>
    <TimelineSequence name="03-invalidity-procedure-fork" {...SCENES['invalidity-procedure-fork']}>
      <InvalidityProcedureScene />
    </TimelineSequence>
    <TimelineSequence name="04-revocable-marriage-lane" {...SCENES['revocable-marriage-lane']}>
      <RevocableMarriageScene />
    </TimelineSequence>
  </AbsoluteFill>
);
