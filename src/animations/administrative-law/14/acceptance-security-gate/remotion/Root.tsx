import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { AcceptanceSecurityGate } from "./AcceptanceSecurityGate";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="AcceptanceSecurityGate"
    component={withAnimationTypography(
      AcceptanceSecurityGate,
      getAnimationTypographyConfiguration('acceptance-security-gate'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
