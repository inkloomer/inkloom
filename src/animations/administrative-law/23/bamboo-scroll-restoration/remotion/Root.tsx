import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { BambooScrollRestoration } from "./BambooScrollRestoration";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="BambooScrollRestoration"
    component={withAnimationTypography(
      BambooScrollRestoration,
      getAnimationTypographyConfiguration('bamboo-scroll-restoration'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
