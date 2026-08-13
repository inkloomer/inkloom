import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { DisclosureCaseDesk } from "./DisclosureCaseDesk";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="DisclosureCaseDesk"
    component={withAnimationTypography(
      DisclosureCaseDesk,
      getAnimationTypographyConfiguration('disclosure-case-desk'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
