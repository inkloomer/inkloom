import { Composition } from 'remotion';
import { LawAttributes } from './LawAttributes';
import { DURATION_FRAMES } from './storyboard';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LawAttributes"
        component={LawAttributes}
        durationInFrames={DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
