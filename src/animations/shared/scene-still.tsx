import type {ComponentType, FC} from 'react';
import {AbsoluteFill} from 'remotion';

/** Wrap a bare scene for Studio single-composition preview */
export const wrapSceneStill = (
  Scene: ComponentType,
  background: string,
  Structure?: ComponentType,
): FC => {
  const Still: FC = () => (
    <AbsoluteFill style={{backgroundColor: background, overflow: 'hidden'}}>
      {Structure ? <Structure /> : null}
      <Scene />
    </AbsoluteFill>
  );
  Still.displayName = `Still(${Scene.displayName ?? Scene.name ?? 'Scene'})`;
  return Still;
};
