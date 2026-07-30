import {useCurrentFrame} from 'remotion';
import {
  FirstInstanceScene,
  JurorsScene,
  MidCourtBanScene,
  MisconceptionsScene,
  PathGateScene,
  SecondInstanceScene,
} from './scenes/TrialOrganizationScenes';
import {DURATION_FRAMES, SCENES} from './storyboard';
import {DeckShell, SceneSequence} from './visual-system';

export const TrialOrganizationPath = () => {
  const frame = useCurrentFrame();

  return (
    <DeckShell frame={frame} totalFrames={DURATION_FRAMES}>
      <SceneSequence name="01-path-gate" {...SCENES.pathGate}>
        <PathGateScene />
      </SceneSequence>
      <SceneSequence name="02-first-instance" {...SCENES.firstInstance}>
        <FirstInstanceScene />
      </SceneSequence>
      <SceneSequence name="03-second-instance" {...SCENES.secondInstance}>
        <SecondInstanceScene />
      </SceneSequence>
      {/* Cut: mid-court ban is a hard prohibition, not a continuation of the four-gate pass path */}
      <SceneSequence name="04-mid-court-ban" {...SCENES.midCourtBan} cut>
        <MidCourtBanScene />
      </SceneSequence>
      <SceneSequence name="05-misconceptions" {...SCENES.misconceptions}>
        <MisconceptionsScene />
      </SceneSequence>
      <SceneSequence name="06-jurors" {...SCENES.jurors}>
        <JurorsScene />
      </SceneSequence>
    </DeckShell>
  );
};
