import {Composition} from 'remotion';
import {TerritorialJurisdiction} from './TerritorialJurisdiction';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="TerritorialJurisdiction"
    component={TerritorialJurisdiction}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
