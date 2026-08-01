import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition, Folder} from 'remotion';
import {RecusalProcedurePath} from './RecusalProcedurePath';
import {
  DecisionScene,
  PauseVsContinueScene,
  PendingEffectScene,
  RemedyScene,
  ScopeScene,
  TimingScene,
} from './scenes/RecusalScenes';
import {DURATION_FRAMES, FPS, PALETTE, SCENES} from './storyboard';
import {BackgroundStructure} from './visual-system';
import {wrapSceneStill} from '../../../../shared/scene-still';

const stills = {
  scope: wrapSceneStill(ScopeScene, PALETTE.background, BackgroundStructure),
  timing: wrapSceneStill(TimingScene, PALETTE.background, BackgroundStructure),
  pendingEffect: wrapSceneStill(PendingEffectScene, PALETTE.background, BackgroundStructure),
  decision: wrapSceneStill(DecisionScene, PALETTE.background, BackgroundStructure),
  remedy: wrapSceneStill(RemedyScene, PALETTE.background, BackgroundStructure),
  pauseVsContinue: wrapSceneStill(PauseVsContinueScene, PALETTE.background, BackgroundStructure),
} as const;

export const RemotionRoot = () => (
  <>
    <Folder name="RecusalProcedurePath-Scenes">
      <Composition id="RecusalProcedurePath-scope" component={stills.scope} durationInFrames={SCENES.scope.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="RecusalProcedurePath-timing" component={stills.timing} durationInFrames={SCENES.timing.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="RecusalProcedurePath-pendingEffect" component={stills.pendingEffect} durationInFrames={SCENES.pendingEffect.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="RecusalProcedurePath-decision" component={stills.decision} durationInFrames={SCENES.decision.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="RecusalProcedurePath-remedy" component={stills.remedy} durationInFrames={SCENES.remedy.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="RecusalProcedurePath-pauseVsContinue" component={stills.pauseVsContinue} durationInFrames={SCENES.pauseVsContinue.duration} fps={FPS} width={1920} height={1080} />
    </Folder>
    <Composition id="RecusalProcedurePath" component={withAnimationTypography(RecusalProcedurePath, getAnimationTypographyConfiguration('recusal-procedure-path'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
  </>
);
