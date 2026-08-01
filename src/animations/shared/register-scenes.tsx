import type {ComponentType, FC} from 'react';
import {Composition, Folder} from 'remotion';
import {withAnimationTypography} from '../../typography/animation-provider';
import type {AnimationTypographyConfiguration} from '../../typography/animation-presets';

export type SceneTiming = {
  readonly start: number;
  readonly duration: number;
  readonly previewEndTrimFrames: number;
};

export type SceneRegistration = {
  readonly id: string;
  readonly component: ComponentType;
  readonly durationInFrames: number;
};

/**
 * Register full deck + each scene as its own Composition (remotion-markup multi-scene).
 * Studio: double-click sequence / open Folder to edit a single page.
 */
export const registerDeckAndScenes = ({
  deckId,
  deckComponent,
  deckDurationInFrames,
  fps,
  folderId,
  scenes,
  typography,
  width = 1920,
  height = 1080,
}: {
  readonly deckId: string;
  readonly deckComponent: ComponentType;
  readonly deckDurationInFrames: number;
  readonly fps: number;
  readonly folderId: string;
  readonly scenes: readonly SceneRegistration[];
  readonly typography?: AnimationTypographyConfiguration;
  readonly width?: number;
  readonly height?: number;
}): FC => {
  const Root: FC = () => (
    <>
      <Folder name={folderId}>
        {scenes.map((scene) => (
          <Composition
            key={scene.id}
            id={`${deckId}-${scene.id}`}
            component={withAnimationTypography(scene.component as ComponentType<Record<string, never>>, typography)}
            durationInFrames={scene.durationInFrames}
            fps={fps}
            width={width}
            height={height}
          />
        ))}
      </Folder>
      <Composition
        id={deckId}
        component={withAnimationTypography(deckComponent as ComponentType<Record<string, never>>, typography)}
        durationInFrames={deckDurationInFrames}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
  return Root;
};
