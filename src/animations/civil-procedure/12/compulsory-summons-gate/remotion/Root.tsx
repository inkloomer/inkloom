import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { CompulsorySummonsGate } from "./CompulsorySummonsGate";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="CompulsorySummonsGate"
    component={withAnimationTypography(
      CompulsorySummonsGate,
      getAnimationTypographyConfiguration('compulsory-summons-gate'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
