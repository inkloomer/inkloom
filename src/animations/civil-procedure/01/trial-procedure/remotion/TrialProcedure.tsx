import {useCurrentFrame} from 'remotion';
import {
  ComparisonScene,
  CriterionScene,
  LitigationScene,
  NonLitigationScene,
  VoterExceptionScene,
} from './scenes/TrialProcedureScenes';
import {DURATION_FRAMES, SCENES} from './storyboard';
import {DeckShell, SceneSequence} from './visual-system';

export const TrialProcedure = () => {
  const frame = useCurrentFrame();

  return (
    <DeckShell frame={frame} totalFrames={DURATION_FRAMES}>
      <SceneSequence name="01-criterion" {...SCENES.criterion}>
        <CriterionScene />
      </SceneSequence>
      <SceneSequence name="02-litigation" {...SCENES.litigation}>
        <LitigationScene />
      </SceneSequence>
      <SceneSequence name="03-non-litigation" {...SCENES.nonLitigation}>
        <NonLitigationScene />
      </SceneSequence>
      {/* Intentional cut: 选民资格 is a classification exception, not a branch of the prior lane */}
      <SceneSequence name="04-voter-exception" {...SCENES.voterException} cut>
        <VoterExceptionScene />
      </SceneSequence>
      <SceneSequence name="05-comparison" {...SCENES.comparison}>
        <ComparisonScene />
      </SceneSequence>
    </DeckShell>
  );
};
