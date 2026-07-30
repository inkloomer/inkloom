import { Composition } from 'remotion';
import { TrialProcedure } from './TrialProcedure';
import { DURATION_FRAMES } from './storyboard';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TrialProcedure"
        component={TrialProcedure}
        durationInFrames={DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
