import {Composition} from 'remotion';
import {TrialProcedure} from './TrialProcedure';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TrialProcedure"
        component={TrialProcedure}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
