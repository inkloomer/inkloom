import {useCurrentFrame} from 'remotion';
import {
  DecisionScene,
  PauseVsContinueScene,
  PendingEffectScene,
  RemedyScene,
  ScopeScene,
  TimingScene,
} from './scenes/RecusalScenes';
import {DURATION_FRAMES, SCENES} from './storyboard';
import {DeckShell, SceneSequence} from './visual-system';

export const RecusalProcedurePath = () => {
  const frame = useCurrentFrame();

  return (
    <DeckShell frame={frame} totalFrames={DURATION_FRAMES}>
      <SceneSequence name="01-scope" {...SCENES.scope}>
        <ScopeScene />
      </SceneSequence>
      <SceneSequence name="02-timing" {...SCENES.timing}>
        <TimingScene />
      </SceneSequence>
      <SceneSequence name="03-pending-effect" {...SCENES.pendingEffect}>
        <PendingEffectScene />
      </SceneSequence>
      <SceneSequence name="04-decision" {...SCENES.decision}>
        <DecisionScene />
      </SceneSequence>
      <SceneSequence name="05-remedy" {...SCENES.remedy}>
        <RemedyScene />
      </SceneSequence>
      {/* Cut into the core contrast scene: 审查期暂停 ≠ 复议期不停 */}
      <SceneSequence name="06-pause-vs-continue" {...SCENES.pauseVsContinue} cut>
        <PauseVsContinueScene />
      </SceneSequence>
    </DeckShell>
  );
};
