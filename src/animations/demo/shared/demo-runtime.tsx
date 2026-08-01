import type {ComponentType, FC} from 'react';
import {Composition, registerRoot} from 'remotion';
import {withAnimationTypography} from '../../../typography/animation-provider';

export const DEMO_FPS = 60;
export const DEMO_DURATION_FRAMES = 240;
export const DEMO_SCENES = {
  showcase: {start: 0, duration: DEMO_DURATION_FRAMES, previewEndTrimFrames: 0},
} as const;

export const registerStyleDemo = (id: string, component: ComponentType<Record<string, never>>) => {
  const Root: FC = () => (
    <Composition
      id={id}
      component={withAnimationTypography(component)}
      durationInFrames={240}
      fps={60}
      width={1920}
      height={1080}
    />
  );
  registerRoot(Root);
};
