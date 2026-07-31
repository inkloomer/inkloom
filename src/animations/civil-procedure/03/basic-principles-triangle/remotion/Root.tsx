import {Composition, Folder} from 'remotion';
import {wrapSceneStill} from '../../../../shared/scene-still';
import {BasicPrinciplesTriangle} from './BasicPrinciplesTriangle';
import {BasicPrinciplesTriangleScene} from './scenes/BasicPrinciplesScenes';
import {DURATION_FRAMES, FPS, PALETTE, SCENES} from './storyboard';
import {BackgroundStructure} from './visual-system';

const RelationshipStill = wrapSceneStill(BasicPrinciplesTriangleScene, PALETTE.background, BackgroundStructure);

export const RemotionRoot = () => (
  <>
    <Folder name="BasicPrinciplesTriangle-Scenes">
      <Composition id="BasicPrinciplesTriangle-relationships" component={RelationshipStill} durationInFrames={SCENES.relationships.duration} fps={FPS} width={1920} height={1080} />
    </Folder>
    <Composition id="BasicPrinciplesTriangle" component={BasicPrinciplesTriangle} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
  </>
);
