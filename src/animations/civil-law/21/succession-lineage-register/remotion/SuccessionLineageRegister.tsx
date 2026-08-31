import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  EstateSettlementScene,
  ForfeitureRenunciationScene,
  HeirSequenceLanesScene,
  LegacyAgreementScene,
  RepresentationTransferScene,
  WillFormsValidityScene,
} from './SuccessionLineageRegisterScenes';

export const SuccessionLineageRegister = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-heir-sequence-lanes" {...SCENES['heir-sequence-lanes']}>
      <HeirSequenceLanesScene />
    </TimelineSequence>
    <TimelineSequence name="02-forfeiture-renunciation-split" {...SCENES['forfeiture-renunciation-split']}>
      <ForfeitureRenunciationScene />
    </TimelineSequence>
    <TimelineSequence name="03-representation-transfer-chain" {...SCENES['representation-transfer-chain']}>
      <RepresentationTransferScene />
    </TimelineSequence>
    <TimelineSequence name="04-will-forms-validity-gate" {...SCENES['will-forms-validity-gate']}>
      <WillFormsValidityScene />
    </TimelineSequence>
    <TimelineSequence name="05-legacy-agreement-priority" {...SCENES['legacy-agreement-priority']}>
      <LegacyAgreementScene />
    </TimelineSequence>
    <TimelineSequence name="06-estate-settlement-lane" {...SCENES['estate-settlement-lane']}>
      <EstateSettlementScene />
    </TimelineSequence>
  </AbsoluteFill>
);
