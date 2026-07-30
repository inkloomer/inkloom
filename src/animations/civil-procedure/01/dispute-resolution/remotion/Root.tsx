import { Composition } from 'remotion';
import { DisputeResolution } from './DisputeResolution';
import { DURATION_FRAMES } from './storyboard';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DisputeResolution"
        component={DisputeResolution}
        durationInFrames={DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
