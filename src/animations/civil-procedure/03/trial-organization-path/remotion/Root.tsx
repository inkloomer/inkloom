import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition, Folder} from 'remotion';
import {TrialOrganizationPath} from './TrialOrganizationPath';
import {
  FirstInstanceScene,
  JurorsScene,
  MidCourtBanScene,
  MisconceptionsScene,
  PathGateScene,
  SecondInstanceScene,
} from './scenes/TrialOrganizationScenes';
import {DURATION_FRAMES, FPS, PALETTE, SCENES} from './storyboard';
import {BackgroundStructure} from './visual-system';
import {wrapSceneStill} from '../../../../shared/scene-still';

const stills = {
  pathGate: wrapSceneStill(PathGateScene, PALETTE.background, BackgroundStructure),
  firstInstance: wrapSceneStill(FirstInstanceScene, PALETTE.background, BackgroundStructure),
  secondInstance: wrapSceneStill(SecondInstanceScene, PALETTE.background, BackgroundStructure),
  midCourtBan: wrapSceneStill(MidCourtBanScene, PALETTE.background, BackgroundStructure),
  misconceptions: wrapSceneStill(MisconceptionsScene, PALETTE.background, BackgroundStructure),
  jurors: wrapSceneStill(JurorsScene, PALETTE.background, BackgroundStructure),
} as const;

export const RemotionRoot = () => (
  <>
    <Folder name="TrialOrganizationPath-Scenes">
      <Composition id="TrialOrganizationPath-pathGate" component={stills.pathGate} durationInFrames={SCENES.pathGate.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialOrganizationPath-firstInstance" component={stills.firstInstance} durationInFrames={SCENES.firstInstance.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialOrganizationPath-secondInstance" component={stills.secondInstance} durationInFrames={SCENES.secondInstance.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialOrganizationPath-midCourtBan" component={stills.midCourtBan} durationInFrames={SCENES.midCourtBan.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialOrganizationPath-misconceptions" component={stills.misconceptions} durationInFrames={SCENES.misconceptions.duration} fps={FPS} width={1920} height={1080} />
      <Composition id="TrialOrganizationPath-jurors" component={stills.jurors} durationInFrames={SCENES.jurors.duration} fps={FPS} width={1920} height={1080} />
    </Folder>
    <Composition id="TrialOrganizationPath" component={withAnimationTypography(TrialOrganizationPath, getAnimationTypographyConfiguration('trial-organization-path'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />
  </>
);
