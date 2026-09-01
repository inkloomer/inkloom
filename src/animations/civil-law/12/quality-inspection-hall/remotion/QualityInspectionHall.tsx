import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {FruitIpScene, InspectionGateScene, RiskDirectScene, RiskIndirectScene} from './QualityInspectionScenes';

export const QualityInspectionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-fruit-ip-strip" {...SCENES['fruit-ip-strip']}>
      <FruitIpScene />
    </TimelineSequence>
    <TimelineSequence name="02-inspection-gate-series" {...SCENES['inspection-gate-series']}>
      <InspectionGateScene />
    </TimelineSequence>
    <TimelineSequence name="03-risk-direct-lanes" {...SCENES['risk-direct-lanes']}>
      <RiskDirectScene />
    </TimelineSequence>
    <TimelineSequence name="04-risk-indirect-ledger" {...SCENES['risk-indirect-ledger']}>
      <RiskIndirectScene />
    </TimelineSequence>
  </AbsoluteFill>
);
