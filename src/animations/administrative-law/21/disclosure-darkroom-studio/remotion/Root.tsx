import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { DisclosureDarkroomStudio } from "./DisclosureDarkroomStudio";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="DisclosureDarkroomStudio"
    component={withAnimationTypography(
      DisclosureDarkroomStudio,
      getAnimationTypographyConfiguration('disclosure-darkroom-studio'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
