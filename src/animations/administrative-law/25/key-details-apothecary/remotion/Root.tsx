import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { KeyDetailsApothecary } from "./KeyDetailsApothecary";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="KeyDetailsApothecary"
    component={withAnimationTypography(
      KeyDetailsApothecary,
      getAnimationTypographyConfiguration('key-details-apothecary'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
