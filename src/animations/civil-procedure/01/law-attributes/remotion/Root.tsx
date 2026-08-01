import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import { Composition } from 'remotion';
import { LawAttributes } from './LawAttributes';
import { DURATION_FRAMES } from './storyboard';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LawAttributes"
        component={withAnimationTypography(LawAttributes, getAnimationTypographyConfiguration('law-attributes'))}
        durationInFrames={DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
