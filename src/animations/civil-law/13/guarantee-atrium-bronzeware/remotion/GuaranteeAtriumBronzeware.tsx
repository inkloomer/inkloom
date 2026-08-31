import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  CounterGuaranteeScene,
  GuaranteeSystemScene,
  JointGuaranteeScene,
  SubordinationScene,
} from './GuaranteeAtriumBronzewareScenes';

export const GuaranteeAtriumBronzeware = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-guarantee-system-bench" {...SCENES['guarantee-system-bench']}>
      <GuaranteeSystemScene />
    </TimelineSequence>
    <TimelineSequence name="02-counter-guarantee-invalidity" {...SCENES['counter-guarantee-invalidity']}>
      <CounterGuaranteeScene />
    </TimelineSequence>
    <TimelineSequence name="03-subordinate-liability-changes" {...SCENES['subordinate-liability-changes']}>
      <SubordinationScene />
    </TimelineSequence>
    <TimelineSequence name="04-joint-guarantee-hall" {...SCENES['joint-guarantee-hall']}>
      <JointGuaranteeScene />
    </TimelineSequence>
  </AbsoluteFill>
);
