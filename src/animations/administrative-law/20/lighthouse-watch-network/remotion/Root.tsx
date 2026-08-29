import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { LighthouseWatchNetwork } from "./LighthouseWatchNetwork";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="LighthouseWatchNetwork"
    component={withAnimationTypography(
      LighthouseWatchNetwork,
      getAnimationTypographyConfiguration('lighthouse-watch-network'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
