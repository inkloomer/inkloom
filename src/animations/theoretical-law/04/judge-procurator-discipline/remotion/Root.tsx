import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {JudgeProcuratorDiscipline} from './JudgeProcuratorDiscipline';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JudgeProcuratorDiscipline"
    component={withAnimationTypography(
      JudgeProcuratorDiscipline,
      getAnimationTypographyConfiguration('judge-procurator-discipline'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
