import {Composition} from 'remotion';
import {FightDefenseDiagram} from './FightDefenseDiagram';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition id="FightDefenseDiagram" component={FightDefenseDiagram} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
);
