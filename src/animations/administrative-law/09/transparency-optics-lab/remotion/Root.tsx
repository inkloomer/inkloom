import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { TransparencyOpticsLab } from "./TransparencyOpticsLab";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="TransparencyOpticsLab"
    component={withAnimationTypography(
      TransparencyOpticsLab,
      getAnimationTypographyConfiguration("transparency-optics-lab"),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
