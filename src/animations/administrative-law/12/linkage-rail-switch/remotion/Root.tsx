import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { LinkageRailSwitch } from "./LinkageRailSwitch";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="LinkageRailSwitch"
    component={withAnimationTypography(
      LinkageRailSwitch,
      getAnimationTypographyConfiguration('linkage-rail-switch'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
