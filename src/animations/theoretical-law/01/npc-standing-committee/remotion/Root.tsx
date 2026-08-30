import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NpcStandingCommittee} from './NpcStandingCommittee';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="NpcStandingCommittee"
    component={withAnimationTypography(
      NpcStandingCommittee,
      getAnimationTypographyConfiguration('npc-standing-committee'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
