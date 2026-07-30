import type {ComponentType, FC} from 'react';
import {Composition, Folder} from 'remotion';

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
  width = 1920,
  height = 1080,
}: {
  readonly deckId: string;
  readonly deckComponent: ComponentType;
  readonly deckDurationInFrames: number;
  readonly fps: number;
  readonly folderId: string;
  readonly scenes: readonly SceneRegistration[];
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
            component={scene.component}
            durationInFrames={scene.durationInFrames}
            fps={fps}
            width={width}
            height={height}
          />
        ))}
      </Folder>
      <Composition
        id={deckId}
        component={deckComponent}
        durationInFrames={deckDurationInFrames}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
  return Root;
};
