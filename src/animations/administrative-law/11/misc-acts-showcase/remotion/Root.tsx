import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { MiscActsShowcase } from "./MiscActsShowcase";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="MiscActsShowcase"
    component={withAnimationTypography(
      MiscActsShowcase,
      getAnimationTypographyConfiguration("misc-acts-showcase"),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
