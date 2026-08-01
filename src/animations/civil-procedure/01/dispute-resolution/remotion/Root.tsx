import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition, Folder} from 'remotion';
import {DisputeResolution} from './DisputeResolution';
import {
  EnforceabilityScene,
  FormalScene,
  InformalScene,
  RecapScene,
  SpectrumScene,
} from './scenes/DisputeResolutionScenes';
import {DURATION_FRAMES, FPS, PALETTE, SCENES} from './storyboard';
import {BackgroundStructure} from './visual-system';
import {wrapSceneStill} from '../../../../shared/scene-still';

const stills = {
  spectrum: wrapSceneStill(SpectrumScene, PALETTE.background, BackgroundStructure),
  informal: wrapSceneStill(InformalScene, PALETTE.background, BackgroundStructure),
  formal: wrapSceneStill(FormalScene, PALETTE.background, BackgroundStructure),
  enforceability: wrapSceneStill(EnforceabilityScene, PALETTE.background, BackgroundStructure),
  recap: wrapSceneStill(RecapScene, PALETTE.background, BackgroundStructure),
} as const;

export const RemotionRoot = () => (
  <>
    <Folder name="DisputeResolution-Scenes">
      <Composition id="DisputeResolution-spectrum" component={stills.spectrum} durationInFrames={SCENES.spectrum.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="DisputeResolution-informal" component={stills.informal} durationInFrames={SCENES.informal.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="DisputeResolution-formal" component={stills.formal} durationInFrames={SCENES.formal.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="DisputeResolution-enforceability" component={stills.enforceability} durationInFrames={SCENES.enforceability.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="DisputeResolution-recap" component={stills.recap} durationInFrames={SCENES.recap.duration} fps={FPS} width={1920} height={1080} />
    </Folder>
    <Composition id="DisputeResolution" component={withAnimationTypography(DisputeResolution, getAnimationTypographyConfiguration('dispute-resolution'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
  </>
);
