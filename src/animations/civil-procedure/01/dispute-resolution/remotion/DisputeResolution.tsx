import {useCurrentFrame} from 'remotion';
import {
  EnforceabilityScene,
  FormalScene,
  InformalScene,
  RecapScene,
  SpectrumScene,
} from './scenes/DisputeResolutionScenes';
import {DURATION_FRAMES, SCENES} from './storyboard';
import {DeckShell, SceneSequence} from './visual-system';

export const DisputeResolution = () => {
  const frame = useCurrentFrame();

  return (
    <DeckShell frame={frame} totalFrames={DURATION_FRAMES}>
      <SceneSequence name="01-spectrum" {...SCENES.spectrum}>
        <SpectrumScene />
      </SceneSequence>
      <SceneSequence name="02-informal" {...SCENES.informal}>
        <InformalScene />
      </SceneSequence>
      <SceneSequence name="03-formal" {...SCENES.formal}>
        <FormalScene />
      </SceneSequence>
      <SceneSequence name="04-enforceability" {...SCENES.enforceability}>
        <EnforceabilityScene />
      </SceneSequence>
      <SceneSequence name="05-recap" {...SCENES.recap}>
        <RecapScene />
      </SceneSequence>
    </DeckShell>
  );
};
