import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {
  ConceptLegalScene,
  EffectsSamaritanScene,
  SpecialThreeScene,
  SubjectiveObjectiveScene,
} from './NegotiorumScenes';

export const NegotiorumManagementHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-legal-element" {...SCENES['concept-legal-element']}>
      <ConceptLegalScene />
    </TimelineSequence>
    <TimelineSequence name="02-subjective-objective-bench" {...SCENES['subjective-objective-bench']}>
      <SubjectiveObjectiveScene />
    </TimelineSequence>
    <TimelineSequence name="03-special-three-scenes" {...SCENES['special-three-scenes']}>
      <SpecialThreeScene />
    </TimelineSequence>
    <TimelineSequence name="04-effects-samaritan" {...SCENES['effects-samaritan']}>
      <EffectsSamaritanScene />
    </TimelineSequence>
  </AbsoluteFill>
);
