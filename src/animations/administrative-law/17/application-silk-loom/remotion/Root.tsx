import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { ApplicationSilkLoom } from "./ApplicationSilkLoom";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="ApplicationSilkLoom"
    component={withAnimationTypography(
      ApplicationSilkLoom,
      getAnimationTypographyConfiguration('application-silk-loom'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
