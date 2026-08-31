import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  BequestAgreementDebtsScene,
  HeirOrderKinshipScene,
  LossWaiverRightsScene,
  RepresentationTransmissionScene,
  WillFormsValidityScene,
} from './InheritanceLineageScenes';

export const InheritanceLineageRegister = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-heir-order-kinship" {...SCENES['heir-order-kinship']}>
      <HeirOrderKinshipScene />
    </TimelineSequence>
    <TimelineSequence name="02-loss-waiver-rights" {...SCENES['loss-waiver-rights']}>
      <LossWaiverRightsScene />
    </TimelineSequence>
    <TimelineSequence name="03-representation-transmission" {...SCENES['representation-transmission']}>
      <RepresentationTransmissionScene />
    </TimelineSequence>
    <TimelineSequence name="04-will-forms-validity" {...SCENES['will-forms-validity']}>
      <WillFormsValidityScene />
    </TimelineSequence>
    <TimelineSequence name="05-bequest-agreement-debts" {...SCENES['bequest-agreement-debts']}>
      <BequestAgreementDebtsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
