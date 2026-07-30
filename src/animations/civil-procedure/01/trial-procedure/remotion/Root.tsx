import {Composition, Folder} from 'remotion';
import {TrialProcedure} from './TrialProcedure';
import {
  ComparisonScene,
  CriterionScene,
  LitigationScene,
  NonLitigationScene,
  VoterExceptionScene,
} from './scenes/TrialProcedureScenes';
import {DURATION_FRAMES, FPS, PALETTE, SCENES} from './storyboard';
import {BackgroundStructure} from './visual-system';
import {wrapSceneStill} from '../../../../shared/scene-still';

const stills = {
  criterion: wrapSceneStill(CriterionScene, PALETTE.background, BackgroundStructure),
  litigation: wrapSceneStill(LitigationScene, PALETTE.background, BackgroundStructure),
  nonLitigation: wrapSceneStill(NonLitigationScene, PALETTE.background, BackgroundStructure),
  voterException: wrapSceneStill(VoterExceptionScene, PALETTE.background, BackgroundStructure),
  comparison: wrapSceneStill(ComparisonScene, PALETTE.background, BackgroundStructure),
} as const;

export const RemotionRoot = () => (
  <>
    <Folder name="TrialProcedure-Scenes">
      <Composition id="TrialProcedure-criterion" component={stills.criterion} durationInFrames={SCENES.criterion.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialProcedure-litigation" component={stills.litigation} durationInFrames={SCENES.litigation.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialProcedure-nonLitigation" component={stills.nonLitigation} durationInFrames={SCENES.nonLitigation.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialProcedure-voterException" component={stills.voterException} durationInFrames={SCENES.voterException.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialProcedure-comparison" component={stills.comparison} durationInFrames={SCENES.comparison.duration} fps={FPS} width={1920} height={1080} />
    </Folder>
    <Composition id="TrialProcedure" component={TrialProcedure} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
  </>
);
