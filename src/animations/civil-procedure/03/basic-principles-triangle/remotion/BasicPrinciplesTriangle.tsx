import {useCurrentFrame} from 'remotion';
import {BasicPrinciplesTriangleScene} from './scenes/BasicPrinciplesScenes';
import {DURATION_FRAMES, SCENES} from './storyboard';
import {DeckShell, SceneSequence} from './visual-system';

export const BasicPrinciplesTriangle = () => {
  const frame = useCurrentFrame();

  return (
    <DeckShell frame={frame} totalFrames={DURATION_FRAMES}>
      <SceneSequence name="01-relationships" {...SCENES.relationships}><BasicPrinciplesTriangleScene /></SceneSequence>
    </DeckShell>
  );
};
