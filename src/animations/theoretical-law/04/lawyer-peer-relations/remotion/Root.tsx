import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LawyerPeerRelations} from './LawyerPeerRelations';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LawyerPeerRelations"
    component={withAnimationTypography(
      LawyerPeerRelations,
      getAnimationTypographyConfiguration('lawyer-peer-relations'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
