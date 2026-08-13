import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { LitigantHierarchyBeacon } from "./LitigantHierarchyBeacon";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="LitigantHierarchyBeacon"
    component={withAnimationTypography(
      LitigantHierarchyBeacon,
      getAnimationTypographyConfiguration("litigant-hierarchy-beacon"),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
