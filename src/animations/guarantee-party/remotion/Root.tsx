import {Composition} from 'remotion';
import {GuaranteeParty} from './GuaranteeParty';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="GuaranteeParty"
    component={GuaranteeParty}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
