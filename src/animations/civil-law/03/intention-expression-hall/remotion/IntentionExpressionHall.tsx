import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AgreementForkScene, IntentionExpressionScene} from './IntentionScenes';
import {FormalActScene, PracticeActScene, ShamHiddenJestScene} from './IntentionDeepScenes';

export const IntentionExpressionHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-intention-expression-anatomy" {...SCENES['intention-expression-anatomy']}>
      <IntentionExpressionScene />
    </TimelineSequence>
    <TimelineSequence name="02-agreement-fork" {...SCENES['agreement-fork']}>
      <AgreementForkScene />
    </TimelineSequence>
    <TimelineSequence name="03-sham-hidden-jest" {...SCENES['sham-hidden-jest']}>
      <ShamHiddenJestScene />
    </TimelineSequence>
    <TimelineSequence name="04-practice-act-delivery" {...SCENES['practice-act-delivery']}>
      <PracticeActScene />
    </TimelineSequence>
    <TimelineSequence name="05-formal-act-dual-path" {...SCENES['formal-act-dual-path']}>
      <FormalActScene />
    </TimelineSequence>
  </AbsoluteFill>
);
